import { integer, pgEnum, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { sejamProfile } from "./sejam-profile.db";
import { relations } from "drizzle-orm";

export const genderEnum = pgEnum('gender', ['Male', 'Female']);

export const privatePerson = pgTable('private_person', {
  id: serial('id').primaryKey(),
  sejamProfileId: integer('sejam_profile_id').references(() => sejamProfile.id),
  birthDate: timestamp('birth_date').notNull(),
  fatherName: text('father_name').notNull(),
  firstName: text('first_name').notNull(),
  gender: genderEnum('gender').notNull(),
  lastName: text('last_name').notNull(),
  placeOfBirth: text('place_of_birth').notNull(),
  placeOfIssue: text('place_of_issue').notNull(),
  seriSh: text('seri_sh').notNull(),
  seriShChar: text('seri_sh_char').notNull(),
  serial: text('serial').notNull(),
  shNumber: text('sh_number').notNull(),
  signatureFile: text('signature_file'),
}); 

export const privatePersonRelations = relations(privatePerson, ({ one }) => ({
  sejamProfile: one(sejamProfile, {
    fields: [privatePerson.sejamProfileId],
    references: [sejamProfile.id],
  }),
}));

