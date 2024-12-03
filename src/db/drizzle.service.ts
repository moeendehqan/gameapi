import { Injectable, Global } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

@Injectable()
export class DrizzleService {
  private pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
  db = drizzle(this.pool, { schema });

  insert = this.db.insert.bind(this.db);
  select = this.db.select.bind(this.db);
  update = this.db.update.bind(this.db);
  delete = this.db.delete.bind(this.db);
} 