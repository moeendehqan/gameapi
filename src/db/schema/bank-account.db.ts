import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { sejamProfile } from "./sejam-profile.db";
import { relations } from "drizzle-orm";

export const bankAccount = pgTable('bank_account', {
  id: serial('id').primaryKey(),
  sejamProfileId: integer('sejam_profile_id').references(() => sejamProfile.id),
  accountNumber: text('account_number').notNull(),
  bankId: integer('bank_id').notNull(),
  bankName: text('bank_name').notNull(),
  branchCode: text('branch_code').notNull(),
  branchName: text('branch_name').notNull(),
  branchCityId: integer('branch_city_id').notNull(),
  branchCityName: text('branch_city_name').notNull(),
  isDefault: boolean('is_default').default(false),
  modifiedDate: timestamp('modified_date'),
  sheba: text('sheba').notNull(),
  type: text('type').notNull(),
}); 


export const bankAccountRelations = relations(bankAccount, ({ one }) => ({
  sejamProfile: one(sejamProfile, {
    fields: [bankAccount.sejamProfileId],
    references: [sejamProfile.id],
  }),
}));