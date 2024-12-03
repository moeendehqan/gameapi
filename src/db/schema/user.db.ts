import { serial, varchar, pgTable, integer, timestamp} from "drizzle-orm/pg-core";
import { sejamProfile } from "./sejam-profile.db";
import { relations } from "drizzle-orm";



export const user = pgTable('user', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    score: integer('score').notNull().default(0),
    mobile: varchar('mobile', { length: 11 }).notNull(),
    sejamProfileId: integer('sejam_profile_id').references(() => sejamProfile.id),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const userRelations = relations(user, ({ one }) => ({
    sejamProfile: one(sejamProfile, {
        fields: [user.sejamProfileId],
        references: [sejamProfile.id],
    }),
}));

