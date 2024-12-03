import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { sejamProfile } from "./sejam-profile.db";
import { relations } from "drizzle-orm";

export const jobInfo = pgTable('job_info', {
  id: serial('id').primaryKey(),
  sejamProfileId: integer('sejam_profile_id').references(() => sejamProfile.id),
  companyAddress: text('company_address'),
  companyCityPrefix: text('company_city_prefix'),
  companyEmail: text('company_email'),
  companyFax: text('company_fax'),
  companyFaxPrefix: text('company_fax_prefix'),
  companyName: text('company_name'),
  companyPhone: text('company_phone'),
  companyPostalCode: text('company_postal_code'),
  companyWebSite: text('company_web_site'),
  employmentDate: timestamp('employment_date'),
  jobId: integer('job_id'),
  jobTitle: text('job_title'),
  jobDescription: text('job_description'),
  position: text('position'),
}); 

export const jobInfoRelations = relations(jobInfo, ({ one }) => ({
  sejamProfile: one(sejamProfile, {
    fields: [jobInfo.sejamProfileId],
    references: [sejamProfile.id],
  }),
}));