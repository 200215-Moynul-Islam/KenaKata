export const VALIDATION_MESSAGES = {
  AUTH: {
    EMAIL: {
      REQUIRED: 'Email is required.',
      MAX_LENGTH: (maxLength: number) => `Email must be at most ${maxLength} characters long.`,
      INVALID: 'Invalid email address.',
    },

    NAME: {
      REQUIRED: 'Name is required.',
      MAX_LENGTH: (maxLength: number) => `Name must be at most ${maxLength} characters long.`,
      INVALID: 'Invalid name format.',
    },

    PASSWORD: {
      MIN_LENGTH: (minLength: number) => `Password must be at least ${minLength} characters long.`,
      MAX_LENGTH: (maxLength: number) => `Password must be at most ${maxLength} characters long.`,
      INVALID: 'Password must include uppercase, lowercase, number, and special character.',
    },

    CONFIRM_PASSWORD: {
      PASSWORDS_MISMATCH: 'Passwords do not match.',
    },

    AVATAR: {
      MAX_LENGTH: (maxLength: number) => `Avatar URL must be at most ${maxLength} characters long.`,
      INVALID: 'Avatar must be a valid HTTP or HTTPS URL.',
    },
  },
};
