import { z } from 'zod';

import { avatarSchema, emailSchema, nameSchema, passwordSchema } from './base';

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    avatar: avatarSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match.',
  });
