import { text, pgTable } from 'drizzle-orm/pg-core';

export const otp = pgTable('otp', {
  mobile: text('mobile'),
  code: text('code'),
  status: text('status'),
});

export interface otp {
  // تعریف interface
} 