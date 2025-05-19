// src/db.ts
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "@/env";
import * as schema from "./schema";


// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
const sql = neon(env.DATABASE_URL);
export const db = drizzle({ client: sql , schema});