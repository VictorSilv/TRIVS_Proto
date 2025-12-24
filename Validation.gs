/**
 * Input sanitization and validation helpers.
 */

function sanitizeString(value) {
  if (typeof value !== 'string') return '';
  return value.trim().substring(0, CONFIG.SECURITY.MAX_STRING_LENGTH);
}

function validateEnum(value, allowedValues) {
  if (!allowedValues.includes(value)) {
    throw new Error(`Invalid enum value: ${value}`);
  }
}

function validateLatLng(lat, lng) {
  if (isNaN(lat) || isNaN(lng)) {
    throw new Error('Latitude or longitude is not a number');
  }
}
