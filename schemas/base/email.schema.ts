import { z } from 'zod';
import { VALIDATION_CONFIG } from '@/config';
import { VALIDATION_MESSAGES } from '@/messages/validation.messages';

const emailSchema = z
  .email({ message: VALIDATION_MESSAGES.AUTH.EMAIL.INVALID })
  .min(VALIDATION_CONFIG.AUTH.EMAIL.MIN_LENGTH, {
    message: VALIDATION_MESSAGES.AUTH.EMAIL.REQUIRED,
  })
  .max(VALIDATION_CONFIG.AUTH.EMAIL.MAX_LENGTH, {
    message: VALIDATION_MESSAGES.AUTH.EMAIL.MAX_LENGTH(VALIDATION_CONFIG.AUTH.EMAIL.MAX_LENGTH),
  });

export default emailSchema;
