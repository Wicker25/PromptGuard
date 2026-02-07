import { normalizePhoneNumber, validatePhoneNumber } from './phone';

describe('phone', () => {
  describe('normalizePhoneNumber', () => {
    it('should remove dashes', () => {
      expect(normalizePhoneNumber('555-123-4567')).toBe('5551234567');
    });

    it('should remove spaces', () => {
      expect(normalizePhoneNumber('555 123 4567')).toBe('5551234567');
    });

    it('should remove parentheses', () => {
      expect(normalizePhoneNumber('(555) 123-4567')).toBe('5551234567');
    });

    it('should preserve + prefix with country code', () => {
      expect(normalizePhoneNumber('+1-555-123-4567')).toBe('+15551234567');
    });

    it('should handle international format with spaces', () => {
      expect(normalizePhoneNumber('+44 20 7946 0958')).toBe('+442079460958');
    });

    it('should trim whitespace', () => {
      expect(normalizePhoneNumber('  555-123-4567  ')).toBe('5551234567');
    });

    it('should handle dots as separators', () => {
      expect(normalizePhoneNumber('555.123.4567')).toBe('5551234567');
    });
  });

  describe('validatePhoneNumber', () => {
    it('should validate US phone numbers', () => {
      expect(validatePhoneNumber('555-123-4567')).toBe(true);
    });

    it('should validate US phone numbers with country code', () => {
      expect(validatePhoneNumber('+1-555-123-4567')).toBe(true);
    });

    it('should validate UK phone numbers', () => {
      expect(validatePhoneNumber('+44 20 7946 0958')).toBe(true);
    });

    it('should validate German phone numbers', () => {
      expect(validatePhoneNumber('+49 30 12345678')).toBe(true);
    });

    it('should reject too short numbers', () => {
      expect(validatePhoneNumber('123')).toBe(false);
    });

    it('should reject numbers that are too short', () => {
      expect(validatePhoneNumber('123')).toBe(false);
    });
  });
});
