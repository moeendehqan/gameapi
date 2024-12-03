import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { sejamProfile } from "./sejam-profile.db";
import { relations } from "drizzle-orm";

export const address = pgTable('address', {
  id: serial('id').primaryKey(),
  sejamProfileId: integer('sejam_profile_id').references(() => sejamProfile.id),
  alley: text('alley'),
  cityId: integer('city_id').notNull(),
  cityName: text('city_name').notNull(),
  cityPrefix: text('city_prefix'),
  countryId: integer('country_id').notNull(),
  countryName: text('country_name').notNull(),
  countryPrefix: text('country_prefix'),
  email: text('email'),
  emergencyTel: text('emergency_tel'),
  emergencyTelCityPrefix: text('emergency_tel_city_prefix'),
  emergencyTelCountryPrefix: text('emergency_tel_country_prefix'),
  fax: text('fax'),
  faxPrefix: text('fax_prefix'),
  mobile: text('mobile'),
  plaque: text('plaque'),
  postalCode: text('postal_code'),
  provinceId: integer('province_id').notNull(),
  provinceName: text('province_name').notNull(),
  remnantAddress: text('remnant_address'),
  sectionId: integer('section_id'),
  sectionName: text('section_name'),
  tel: text('tel'),
  website: text('website'),
}); 

export const addressRelations = relations(address, ({ one }) => ({
  sejamProfile: one(sejamProfile, {
    fields: [address.sejamProfileId],
    references: [sejamProfile.id],
  }),
}));