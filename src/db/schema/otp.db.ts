import { pgTable, serial, text, timestamp, varchar, boolean } from 'drizzle-orm/pg-core';

export const otp = pgTable('otp', {
  id: serial('id').primaryKey(),
  mobile: varchar('mobile', { length: 11 }).notNull(),
  code: text('code').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  used: boolean('used').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow(),
});