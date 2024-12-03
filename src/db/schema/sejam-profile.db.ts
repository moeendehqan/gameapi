import { relations } from "drizzle-orm";
import { pgEnum, pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { bankAccount } from "./bank-account.db";
import { address } from "./address.db";
import { tradingCode } from "./trading-code.db";
import { jobInfo } from "./job-info.db";
import { privatePerson } from "./private-person.db";

// Enums
export const personTypeEnum = pgEnum('person_type', ['IranianPrivatePerson', 'IranianLegalPerson']);
export const statusEnum = pgEnum('status', ['Sejami', 'NotSejami']);

// Main Profile Table
export const sejamProfile = pgTable('sejam_profile', {
  id: serial('id').primaryKey(),
  uniqueIdentifier: text('unique_identifier').notNull(),
  type: personTypeEnum('type').notNull().default('IranianPrivatePerson'),
  status: statusEnum('status').notNull().default('Sejami'),
  mobile: varchar('mobile', { length: 11 }).notNull(),
  email: text('email'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}); 

export const sejamProfileRelations = relations(sejamProfile, ({ many, one }) => ({
  bankAccounts: many(bankAccount),
  addresses: many(address),
  tradingCodes: many(tradingCode),
  jobInfo: many(jobInfo),
  privatePerson: one(privatePerson, {
    fields: [sejamProfile.id],
    references: [privatePerson.id],
  }),
}));
