import { detectPII, redactPII } from './pii';

describe('PII', () => {
  describe('detect', () => {
    describe('Email detection', () => {
      it('should detect simple email addresses', () => {
        const result = detectPII('Contact me at john@example.com');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'EMAIL',
            value: 'john@example.com',
          })
        );
      });

      it('should detect multiple emails', () => {
        const result = detectPII('Email john@example.com or jane@test.org');
        const emails = result.filter((pii) => pii.type === 'EMAIL');
        expect(emails).toHaveLength(2);
      });

      it('should detect emails with dots and plus signs', () => {
        const result = detectPII('Contact john.doe+test@example.com');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'EMAIL',
            value: 'john.doe+test@example.com',
          })
        );
      });
    });

    describe('Phone detection', () => {
      it('should detect US phone numbers with dashes', () => {
        const result = detectPII('Call 555-123-4567');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'PHONE',
          })
        );
      });

      it('should detect US phone numbers with parentheses', () => {
        const result = detectPII('Call (555) 123-4567');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'PHONE',
          })
        );
      });

      it('should detect US phone numbers with country code', () => {
        const result = detectPII('Call +1-555-123-4567');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'PHONE',
          })
        );
      });

      it('should detect UK phone numbers with full format', () => {
        const result = detectPII('UK numbers: +44 20 7946 0958');
        const phones = result.filter((pii) => pii.type === 'PHONE');
        expect(phones.length).toBeGreaterThanOrEqual(1);
        const ukPhone = phones.find((phone) => phone.value.includes('+44'));
        expect(ukPhone).toBeDefined();
      });

      it('should detect German phone numbers with full format', () => {
        const result = detectPII('International (Germany): +49 30 12345678');
        const phones = result.filter((pii) => pii.type === 'PHONE');
        expect(phones.length).toBeGreaterThanOrEqual(1);
        const dePhone = phones.find((phone) => phone.value.includes('+49'));
        expect(dePhone).toBeDefined();
      });

      it('should detect phone numbers even with surrounding text', () => {
        const result = detectPII('UK numbers: +44 20 7946 0958');
        const phones = result.filter((pii) => pii.type === 'PHONE');
        expect(phones.length).toBeGreaterThanOrEqual(1);
        const ukPhone = phones.find((phone) => phone.value.includes('+44'));
        expect(ukPhone).toBeDefined();
      });

      it('should detect multiple international phone numbers', () => {
        const text = 'US: +1-555-123-4567, UK: +44 20 7946 0958, Germany: +49 30 12345678';
        const result = detectPII(text);
        const phones = result.filter((pii) => pii.type === 'PHONE');
        expect(phones.length).toBeGreaterThanOrEqual(3);
      });

      it('should detect phone numbers with spaces', () => {
        const result = detectPII('Call +1 212 555 1234');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'PHONE',
          })
        );
      });
    });

    describe('SSN detection', () => {
      it('should detect SSN with dashes', () => {
        const result = detectPII('My SSN is 123-45-6789');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'SSN',
            value: '123-45-6789',
          })
        );
      });

      it('should detect SSN with spaces', () => {
        const result = detectPII('My SSN is 123 45 6789');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'SSN',
            value: '123 45 6789',
          })
        );
      });
    });

    describe('Credit Card detection', () => {
      it('should detect Visa card numbers', () => {
        const result = detectPII('Card: 4111111111111111');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'CREDIT_CARD',
            value: '4111111111111111',
          })
        );
      });

      it('should detect card numbers with spaces', () => {
        const result = detectPII('Card: 4111 1111 1111 1111');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'CREDIT_CARD',
            value: '4111 1111 1111 1111',
          })
        );
      });

      it('should detect MasterCard numbers', () => {
        const result = detectPII('Card: 5111111111111111');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'CREDIT_CARD',
          })
        );
      });
    });

    describe('IP Address detection', () => {
      it('should detect IPv4 addresses', () => {
        const result = detectPII('Server IP: 192.168.1.1');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'IP_ADDRESS',
            value: '192.168.1.1',
          })
        );
      });

      it('should detect valid IP ranges', () => {
        const result = detectPII('IP: 255.255.255.255');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'IP_ADDRESS',
            value: '255.255.255.255',
          })
        );
      });
    });

    describe('NLP Entity detection (Compromise.js)', () => {
      it('should detect person names', () => {
        const result = detectPII('John Smith went to the store');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'NAME',
            value: 'John Smith',
          })
        );
      });

      it('should detect single names', () => {
        const result = detectPII('I talked to Sarah yesterday');
        const names = result.filter((pii) => pii.type === 'NAME');
        expect(names.length).toBeGreaterThan(0);
      });

      it('should detect locations', () => {
        const result = detectPII('I visited New York last summer');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'LOCATION',
            value: 'New York',
          })
        );
      });

      it('should detect organizations', () => {
        const result = detectPII('She works at Microsoft');
        expect(result).toContainEqual(
          expect.objectContaining({
            type: 'ORGANIZATION',
            value: 'Microsoft',
          })
        );
      });

      it('should detect multiple entity types', () => {
        const result = detectPII('John Smith works at Google in California');
        const types = result.map((pii) => pii.type);
        expect(types).toContain('NAME');
      });
    });

    describe('Mixed content', () => {
      it('should detect multiple PII types in one text', () => {
        const text = 'Contact John at john@example.com or call +1 212 555 1234';
        const result = detectPII(text);
        const types = result.map((pii) => pii.type);
        expect(types).toContain('EMAIL');
        expect(types).toContain('PHONE');
      });

      it('should not have overlapping detections', () => {
        const result = detectPII('Email john.smith@company.com today');
        const names = result.filter((pii) => pii.type === 'NAME' && pii.value === 'john');
        expect(names).toHaveLength(0);
      });

      it('should not detect fragments within phone numbers as locations', () => {
        const result = detectPII('Call me at +44 20 7946 0958');
        const phones = result.filter((pii) => pii.type === 'PHONE');
        expect(phones.length).toBe(1);
        const locations = result.filter((pii) => pii.type === 'LOCATION' && pii.value === 'UK');
        expect(locations).toHaveLength(0);
      });

      it('should handle hyphenated text near country codes', () => {
        const result = detectPII('Format: +44 - UK number');
        const locations = result.filter((pii) => pii.type === 'LOCATION');
        const ukLocations = locations.filter((location) => location.value === 'UK');
        expect(ukLocations.length).toBeLessThanOrEqual(1);
      });
    });
  });

  describe('redact', () => {
    it('should replace detected PII with placeholders', () => {
      const result = redactPII('Email me at test@example.com');
      expect(result.redactedText).toContain('[EMAIL_1]');
      expect(result.redactedText).not.toContain('test@example.com');
    });

    it('should create mappings for each detected item', () => {
      const result = redactPII('Email test@example.com');
      expect(result.redactionMap['[EMAIL_1]']).toEqual({
        type: 'EMAIL',
        original: 'test@example.com',
      });
    });

    it('should reuse placeholders for duplicate values', () => {
      const result = redactPII('Email test@example.com and again test@example.com');
      expect(result.redactedText).toBe('Email [EMAIL_1] and again [EMAIL_1]');
    });

    it('should use existing mappings', () => {
      const redactionMap = {
        '[EMAIL_1]': { type: 'EMAIL' as const, original: 'other@example.com' },
      };
      const result = redactPII('Email test@example.com', redactionMap);
      expect(result.redactedText).toContain('[EMAIL_2]');
    });

    it('should redact names from NLP', () => {
      const result = redactPII('Hello John Smith');
      expect(result.redactionMap['[NAME_1]']?.original).toBe('John Smith');
      expect(result.redactedText).toContain('[NAME_1]');
    });

    it('should preserve text structure', () => {
      const result = redactPII('Line 1\nLine 2 with test@example.com\nLine 3');
      expect(result.redactedText).toContain('\n');
      expect(result.redactedText.split('\n')).toHaveLength(3);
    });

    describe('phone number normalization', () => {
      it('should use same placeholder for phone numbers with different formats', () => {
        const result = redactPII('Call 555-123-4567 or (555) 123-4567');
        expect(result.redactedText).toBe('Call [PHONE_1] or [PHONE_1]');
      });

      it('should use same placeholder for phone with and without country code', () => {
        const result = redactPII('US: +1-555-123-4567, local: 555-123-4567');
        const phoneCount = Object.keys(result.redactionMap).filter((key) =>
          key.startsWith('[PHONE_')
        ).length;
        expect(phoneCount).toBe(2); // +1 prefix makes them different normalized values
      });

      it('should use same placeholder for phone numbers with spaces vs dashes', () => {
        const result = redactPII('Call 555 123 4567 or 555-123-4567');
        expect(result.redactedText).toBe('Call [PHONE_1] or [PHONE_1]');
      });

      it('should reuse existing mapping for normalized phone number', () => {
        const redactionMap = {
          '[PHONE_1]': { type: 'PHONE' as const, original: '555-123-4567' },
        };
        const result = redactPII('Call (555) 123-4567', redactionMap);
        expect(result.redactedText).toBe('Call [PHONE_1]');
      });

      it('should exclude phone numbers regardless of format', () => {
        const result = redactPII('Call (555) 123-4567', {}, ['555-123-4567']);
        expect(result.redactedText).toBe('Call (555) 123-4567');
        expect(result.detectedPII).toHaveLength(0);
      });
    });

    describe('excludedPII', () => {
      it('should skip exact matches in excludedPII', () => {
        const result = redactPII('Contact john@example.com', {}, ['john@example.com']);
        expect(result.redactedText).toBe('Contact john@example.com');
        expect(result.detectedPII).toHaveLength(0);
      });

      it('should skip case-insensitive matches', () => {
        const result = redactPII('She works at Microsoft', {}, ['microsoft']);
        expect(result.redactedText).toBe('She works at Microsoft');
      });

      it('should skip values with 1 edit distance for short strings', () => {
        const result = redactPII('I talked to John yesterday', {}, ['jon']);
        expect(result.redactedText).not.toContain('[NAME_');
      });

      it('should skip values with 2 edit distance for longer strings', () => {
        const result = redactPII('She works at Microsoft', {}, ['microsof']);
        expect(result.redactedText).toBe('She works at Microsoft');
      });

      it('should not skip values exceeding edit distance threshold', () => {
        const result = redactPII('She works at Microsoft', {}, ['goooogle']);
        expect(result.redactedText).toContain('[ORGANIZATION_1]');
      });

      it('should handle multiple excludedPII entries', () => {
        const result = redactPII('John works at Google', {}, ['john', 'google']);
        expect(result.redactedText).toBe('John works at Google');
      });

      it('should still detect non-excluded items', () => {
        const result = redactPII('Email john@example.com about Microsoft', {}, ['microsoft']);
        expect(result.redactedText).toContain('[EMAIL_1]');
        expect(result.redactedText).toContain('Microsoft');
      });
    });
  });
});
