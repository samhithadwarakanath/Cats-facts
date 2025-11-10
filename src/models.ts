import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const catFacts = sqliteTable("catfacts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fact: text("fact").notNull(),
  length: integer("length").notNull(),
});
