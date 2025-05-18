// server/utils/db.ts
import Database from 'better-sqlite3'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

const dbDir = join(process.cwd(), 'data/content')
if (!existsSync(dbDir)) {
  mkdirSync(dbDir, { recursive: true })
}

const dbPath = join(dbDir, 'database.sqlite')
export const db = new Database(dbPath)
