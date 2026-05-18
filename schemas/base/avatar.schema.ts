import { z } from 'zod';
import { VALIDATION_CONFIG } from '@/config';
import { VALIDATION_MESSAGES } from '@/messages/validation.messages';

const avatarSchema = z
  .string()
  .max(
    VALIDATION_CONFIG.AUTH.AVATAR.MAX_LENGTH,
    VALIDATION_MESSAGES.AUTH.AVATAR.MAX_LENGTH(VALIDATION_CONFIG.AUTH.AVATAR.MAX_LENGTH)
  )
  .regex(VALIDATION_CONFIG.AUTH.AVATAR.REGEX, VALIDATION_MESSAGES.AUTH.AVATAR.INVALID);

export default avatarSchema;
