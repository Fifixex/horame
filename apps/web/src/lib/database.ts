import {neon} from '@neondatabase/serverless'
import {env} from '../env'

export const sql = neon(env.DATABASE_URL)

sql(`CREATE TABLE IF NOT EXISTS user (
    id TEXT NOT NULL PRIMARY KEY,
    discord_id INTEGER NOT NULL UNIQUE,
    username TEXT NOT NULL
)`)

sql(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`)

export interface DatabaseUser {
  id: string
  username: string
  discord_id: number
}
