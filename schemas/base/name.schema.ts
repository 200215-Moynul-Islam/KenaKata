import { z } from 'zod';
import { VALIDATION_CONFIG } from '@/config';
import { VALIDATION_MESSAGES } from '@/messages/validation.messages';

const nameSchema = z
  .string()
  .min(VALIDATION_CONFIG.AUTH.NAME.MIN_LENGTH, {
    message: VALIDATION_MESSAGES.AUTH.NAME.REQUIRED,
  })
  .max(VALIDATION_CONFIG.AUTH.NAME.MAX_LENGTH, {
    message: VALIDATION_MESSAGES.AUTH.NAME.MAX_LENGTH(VALIDATION_CONFIG.AUTH.NAME.MAX_LENGTH),
  })
  .regex(VALIDATION_CONFIG.AUTH.NAME.REGEX, {
    message: VALIDATION_MESSAGES.AUTH.NAME.INVALID,
  });

export default nameSchema;
