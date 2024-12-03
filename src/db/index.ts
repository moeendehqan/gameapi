import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);

export * from './drizzle.service';
export * from './schema';

