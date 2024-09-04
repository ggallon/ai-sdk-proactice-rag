import { envDB } from "@/lib/env.mjs";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: envDB.DATABASE_URL,
  },
});
