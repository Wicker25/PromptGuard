import { parsePhoneNumberFromString, getCountries } from 'libphonenumber-js';

export const normalizePhoneNumber = (rawPhoneNumber: string): string => {
  rawPhoneNumber = rawPhoneNumber.trim();

  const hasCountryCodePrefix = rawPhoneNumber.startsWith('+');
  const digitsOnly = rawPhoneNumber.replace(/[^0-9]/g, '');

  if (hasCountryCodePrefix) {
    return '+' + digitsOnly;
  }

  return digitsOnly;
};

export const validatePhoneNumber = (value: string): boolean => {
  const normalized = normalizePhoneNumber(value);

  for (const country of getCountries()) {
    const phone = parsePhoneNumberFromString(normalized, country);

    if (phone && phone.isPossible()) {
      return true;
    }
  }

  return false;
};
