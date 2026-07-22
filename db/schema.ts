import {integer,sqliteTable,text} from "drizzle-orm/sqlite-core";
export const siteContent=sqliteTable("site_content",{id:integer("id").primaryKey(),payload:text("payload").notNull(),updatedAt:text("updated_at").notNull(),updatedBy:text("updated_by").notNull(),sourceFile:text("source_file").notNull().default("")});
