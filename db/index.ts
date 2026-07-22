import {drizzle} from "drizzle-orm/d1";import * as schema from "./schema";
declare global{var __PMI_CHAPTER_MAP_DB__:D1Database|undefined}
export function getDb(){const db=globalThis.__PMI_CHAPTER_MAP_DB__;if(!db)throw new Error("DB binding unavailable");return drizzle(db,{schema})}
