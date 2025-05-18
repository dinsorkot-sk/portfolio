// server/utils/db.ts
import Database from 'better-sqlite3'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'

// const dbDir = join(process.cwd(), '..', 'data', 'content')
const dbDir = '/tmp/data/content'
if (!existsSync(dbDir)) {
    mkdirSync(dbDir, { recursive: true })
}

const dbPath = join(dbDir, 'database.sqlite')
export const db = new Database(dbPath)

db.exec(`
    CREATE TABLE IF NOT EXISTS
  contents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NULL
  )
  `)

db.exec(`
    CREATE TABLE IF NOT EXISTS
  contracts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    link TEXT NOT NULL,
    layout TEXT NOT NULL
  )
  `)

db.exec(`
    CREATE TABLE IF NOT EXISTS
  users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
  )
  `)

db.exec(`
    INSERT INTO users (username, password) VALUES ('admin', '123456789')
    `)


