import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'smol-toml';

const GITLEAKS_CONFIG_URL =
  'https://raw.githubusercontent.com/gitleaks/gitleaks/refs/heads/master/config/gitleaks.toml';

const OUTPUT_FILE = resolve(dirname(fileURLToPath(import.meta.url)), '../src/core/secrets.ts');

interface GitleaksRule {
  id?: string;
  regex?: string;
}

interface NormalizedRegex {
  pattern: string;
  flags: string;
}

/**
 * Strips leading inline flags like (?i)(?s)(?m) from a pattern string and returns them separately.
 */
const extractInlineRegexFlags = (pattern: string): { flags: string; pattern: string } => {
  let flags = '';
  let remaining = pattern;

  while (true) {
    const match = remaining.match(/^\(\?([ims]+)\)/);

    if (!match) {
      break;
    }

    flags += match[1];
    remaining = remaining.slice(match[0].length);
  }

  return { flags, pattern: remaining };
};

/**
 * Deduplicates regex flags and sorts them in a stable order.
 */
const deduplicateFlags = (flags: string): string => {
  const set = new Set(flags);
  return ['i', 'm', 's', 'u', 'g'].filter((flag) => set.has(flag)).join('');
};

/**
 * Converts Go/PCRE regex syntax to JavaScript-compatible regex.
 */
const normalizeRegex = (regex: string): NormalizedRegex => {
  let flags = '';
  let pattern = regex;

  // Convert PCRE named groups (?P<name>...) to JS (?<name>...)
  pattern = pattern.replaceAll('(?P<', '(?<');

  // Pull out leading inline flags like (?i)(?s)(?m)
  const { flags: inlineFlags, pattern: newPattern } = extractInlineRegexFlags(pattern);

  pattern = newPattern;
  flags += inlineFlags;

  // Promote (?i:...) to global 'i' flag and rewrite to plain group
  if (/\(\?i:/.test(pattern)) {
    flags += 'i';
    pattern = pattern.replaceAll('(?i:', '(?:');
  }

  return { pattern, flags: deduplicateFlags(flags) };
};

const main = async () => {
  console.log('Fetching rules from gitleaks...');
  const response = await fetch(GITLEAKS_CONFIG_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch TOML: ${response.status} ${response.statusText}`);
  }

  const tomlText = await response.text();
  const data = parse(tomlText);

  const rules = data.rules as GitleaksRule[] | undefined;

  if (!Array.isArray(rules)) {
    throw new Error('Expected TOML to contain a "rules" array');
  }

  const patterns: { name: string; pattern: string; flags: string }[] = [];

  for (const rule of rules) {
    const { id, regex } = rule;

    if (!id || !regex) {
      console.warn(`[WARN] Skipping rule with missing id or regex: ${JSON.stringify(rule)}`);
      continue;
    }

    const normalized = normalizeRegex(regex);
    patterns.push({ name: id, pattern: normalized.pattern, flags: normalized.flags });
  }

  const entries: string[] = [];

  for (const { name, pattern, flags } of patterns) {
    const escaped = pattern
      .replaceAll('\\', '\\\\')
      .replaceAll('`', '\\`')
      .replaceAll('${', '\\${');

    entries.push(
      '  {',
      `    name: '${name}',`,
      `    pattern: \`${escaped}\`,`,
      `    flags: '${flags}',`,
      '  },'
    );
  }

  const output = [
    '// Auto-generated — do not edit manually',
    '// Source: https://github.com/gitleaks/gitleaks',
    '// prettier-ignore',
    'export const SECRET_PATTERNS = [',
    ...entries,
    '];',
    '',
  ].join('\n');

  writeFileSync(OUTPUT_FILE, output, 'utf-8');
  console.log(`Written ${patterns.length} patterns to ${OUTPUT_FILE}`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
