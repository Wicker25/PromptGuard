import nlp from 'compromise';
import { distance as levenshtein } from 'fastest-levenshtein';
import { validatePhoneNumber, normalizePhoneNumber } from './phone';
import type { PII, PIIType, RedactionMap, RedactionResult } from '../types';
import {
  PII_EMAIL,
  PII_PHONE,
  PII_CREDIT_CARD,
  PII_SSN,
  PII_IP_ADDRESS,
  PII_NAME,
  PII_LOCATION,
  PII_ORGANIZATION,
} from '../constants';

interface PatternRegex {
  type: PIIType;
  regex: RegExp;
  validate?: (value: string) => boolean;
  normalize?: (value: string) => string;
}

const PATTERN_REGEXES: Record<string, PatternRegex> = {
  email: {
    type: PII_EMAIL,
    regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
  },
  creditCard: {
    type: PII_CREDIT_CARD,
    regex:
      /\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})\b/g,
  },
  creditCardSpaced: {
    type: PII_CREDIT_CARD,
    regex:
      /\b(?:4[0-9]{3}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}|5[1-5][0-9]{2}[-\s]?[0-9]{4}[-\s]?[0-9]{4}[-\s]?[0-9]{4}|3[47][0-9]{2}[-\s]?[0-9]{6}[-\s]?[0-9]{5})\b/g,
  },
  ssn: {
    type: PII_SSN,
    regex: /\b[0-9]{3}[-\s][0-9]{2}[-\s][0-9]{4}\b/g,
  },
  ipv4: {
    type: PII_IP_ADDRESS,
    regex:
      /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g,
  },
  ipv6: {
    type: PII_IP_ADDRESS,
    regex:
      /\b(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}\b|\b(?:[0-9a-fA-F]{1,4}:){1,7}:|\b(?:[0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}\b/g,
  },
  phone: {
    type: PII_PHONE,
    regex: /\+?(?=(?:\D*\d){7})[\d\s\-.()]+\d/g,
    validate: validatePhoneNumber,
    normalize: normalizePhoneNumber,
  },
};

const normalizePattern = (value: string, type: PIIType): string => {
  const patternRegex = Object.values(PATTERN_REGEXES).find(
    (patternRegex) => patternRegex.type === type
  );

  if (patternRegex && patternRegex.normalize) {
    return patternRegex.normalize(value);
  }

  return value.toLowerCase().trim();
};

/**
 * Checks if a value matches the excluded PII list using exact match or fuzzy matching (Levenshtein distance).
 * Short strings (< 6 chars) allow 1 edit distance, longer strings allow 2.
 */
const isExcludedPIIMatch = (value: string, excludedPII: string[], type: PIIType): boolean => {
  const normalizedValue = normalizePattern(value, type);

  return excludedPII.some((entry) => {
    const normalizedEntry = normalizePattern(entry, type);
    const maxDistance = normalizedValue.length < 6 ? 1 : 2;

    return (
      normalizedValue === normalizedEntry ||
      levenshtein(normalizedValue, normalizedEntry) <= maxDistance
    );
  });
};

/**
 * Uses compromise.js NLP to detect names, locations, and organizations.
 * Tracks positions to avoid duplicate detections at the same index.
 */
const detectPIIFromNLP = (text: string): PII[] => {
  const doc = nlp(text);

  const detectedPII: PII[] = [];
  const detectedPositions = new Set<number>();

  const addEntity = (value: string, type: PIIType) => {
    if (!value || value.trim() === '') {
      return;
    }

    let searchFrom = 0;
    let index = -1;

    while (searchFrom < text.length) {
      index = text.indexOf(value, searchFrom);

      if (index === -1) {
        break;
      }

      let overlaps = false;

      for (const position of detectedPositions) {
        if (
          (index >= position && index < position + value.length) ||
          (position >= index && position < index + value.length)
        ) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        detectedPositions.add(index);
        detectedPII.push({ type, value, index });
        break;
      }

      searchFrom = index + 1;
    }
  };

  doc.people().forEach((person) => {
    addEntity(person.text(), PII_NAME);
  });

  doc.places().forEach((place) => {
    addEntity(place.text(), PII_LOCATION);
  });

  doc.organizations().forEach((org) => {
    addEntity(org.text(), PII_ORGANIZATION);
  });

  return detectedPII;
};

/**
 * Detects all PII in text using regex patterns and NLP.
 * Returns non-overlapping matches, preferring longer matches when conflicts occur.
 */
export const detectPII = (text: string): PII[] => {
  const detectedPII: PII[] = [];

  for (const pattern of Object.values(PATTERN_REGEXES)) {
    const patternRegex = new RegExp(pattern.regex.source, pattern.regex.flags);
    let match: RegExpExecArray | null;

    while ((match = patternRegex.exec(text)) !== null) {
      const value = match[0].trim();
      const index = match.index + match[0].indexOf(value);

      if (!pattern.validate || pattern.validate(value)) {
        detectedPII.push({ type: pattern.type, value, index });
      }
    }
  }

  detectedPII.push(...detectPIIFromNLP(text));
  detectedPII.sort((a, b) => a.index - b.index);

  const hasOverlap = (first: PII, second: PII): boolean => {
    const firstEnd = first.index + first.value.length;
    const secondEnd = second.index + second.value.length;

    return first.index < secondEnd && second.index < firstEnd;
  };

  const filteredPIIs: PII[] = [];

  for (const pii of detectedPII) {
    const overlapIndex = filteredPIIs.findIndex((existing) => hasOverlap(pii, existing));

    if (overlapIndex === -1) {
      filteredPIIs.push(pii);
    } else if (pii.value.length > filteredPIIs[overlapIndex].value.length) {
      filteredPIIs[overlapIndex] = pii;
    }
  }

  return filteredPIIs;
};

/**
 * Replaces detected PII with placeholders (e.g., [EMAIL_1], [PHONE_1]).
 */
export const redactPII = (
  text: string,
  redactionMap: RedactionMap = {},
  excludedPII: string[] = []
): RedactionResult => {
  let detectedPII = detectPII(text);

  if (excludedPII.length > 0) {
    detectedPII = detectedPII.filter(
      (pii) => !isExcludedPIIMatch(pii.value, excludedPII, pii.type)
    );
  }

  const counters: Record<string, number> = {};
  const redactionMapCopy: RedactionMap = { ...redactionMap };

  for (const placeholder of Object.keys(redactionMapCopy)) {
    const match = placeholder.match(/\[([A-Z_]+)_(\d+)\]/);

    if (match) {
      const type = match[1];
      const num = parseInt(match[2], 10);
      counters[type] = Math.max(counters[type] || 0, num);
    }
  }

  const placeholderLookup: Record<string, string> = {};

  for (const [placeholder, redaction] of Object.entries(redactionMapCopy)) {
    const lookupKey = normalizePattern(redaction.original, redaction.type);
    placeholderLookup[lookupKey] = placeholder;
  }

  let redactedText = text;
  let offset = 0;

  for (const pii of detectedPII) {
    const lookupKey = normalizePattern(pii.value, pii.type);
    let placeholder = placeholderLookup[lookupKey];

    if (!placeholder) {
      counters[pii.type] = (counters[pii.type] || 0) + 1;

      placeholder = `[${pii.type}_${counters[pii.type]}]`;
      placeholderLookup[lookupKey] = placeholder;
      redactionMapCopy[placeholder] = { type: pii.type, original: pii.value };
    }

    const adjustedIndex = pii.index + offset;
    redactedText =
      redactedText.slice(0, adjustedIndex) +
      placeholder +
      redactedText.slice(adjustedIndex + pii.value.length);

    offset += placeholder.length - pii.value.length;
  }

  return { detectedPII, redactionMap: redactionMapCopy, redactedText };
};
