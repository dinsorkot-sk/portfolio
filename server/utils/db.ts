// server/utils/db.ts
import Database from 'better-sqlite3'
import { join } from 'path'

const dbPath = join(process.cwd(), 'data/content/database.sqlite')
export const db = new Database(dbPath)
