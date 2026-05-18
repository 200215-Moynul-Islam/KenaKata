export const VALIDATION_CONFIG = {
  AUTH: {
    EMAIL: {
      MIN_LENGTH: 1,
      MAX_LENGTH: 254,
    },
    NAME: {
      MIN_LENGTH: 1,
      MAX_LENGTH: 100,
      REGEX: /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/,
    },
    PASSWORD: {
      MIN_LENGTH: 8,
      MAX_LENGTH: 64,
      REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).+$/,
    },
    AVATAR: {
      MAX_LENGTH: 2048,
      // basic image url validation
      REGEX: /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i,
    },
  },
};
