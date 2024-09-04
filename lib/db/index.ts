import { envDB } from "@/lib/env.mjs";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(envDB.DATABASE_URL);

export const db = drizzle(sql);
