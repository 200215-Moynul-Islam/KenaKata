import { z } from 'zod';
import { VALIDATION_CONFIG } from '@/config';
import { VALIDATION_MESSAGES } from '@/messages/validation.messages';

const passwordSchema = z
  .string()
  .min(VALIDATION_CONFIG.AUTH.PASSWORD.MIN_LENGTH, {
    message: VALIDATION_MESSAGES.AUTH.PASSWORD.MIN_LENGTH(
      VALIDATION_CONFIG.AUTH.PASSWORD.MIN_LENGTH
    ),
  })
  .max(VALIDATION_CONFIG.AUTH.PASSWORD.MAX_LENGTH, {
    message: VALIDATION_MESSAGES.AUTH.PASSWORD.MAX_LENGTH(
      VALIDATION_CONFIG.AUTH.PASSWORD.MAX_LENGTH
    ),
  })
  .regex(VALIDATION_CONFIG.AUTH.PASSWORD.REGEX, {
    message: VALIDATION_MESSAGES.AUTH.PASSWORD.INVALID,
  });

export default passwordSchema;
