import Database from 'better-sqlite3';

const db = new Database('local.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    title TEXT,
    description TEXT,
    date TEXT
  )
`);

export default db;