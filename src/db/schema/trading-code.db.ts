import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { sejamProfile } from "./sejam-profile.db";
import { relations } from "drizzle-orm";

export const tradingCode = pgTable('trading_code', {
  id: serial('id').primaryKey(),
  sejamProfileId: integer('sejam_profile_id').references(() => sejamProfile.id),
  code: text('code').notNull(),
  firstPart: text('first_part').notNull(),
  secondPart: text('second_part'),
  thirdPart: text('third_part'),
  type: text('type').notNull(),
}); 


export const tradingCodeRelations = relations(tradingCode, ({ one }) => ({
  sejamProfile: one(sejamProfile, {
    fields: [tradingCode.sejamProfileId],
    references: [sejamProfile.id],
  }),
})); 