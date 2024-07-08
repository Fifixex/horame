import {NeonHTTPAdapter} from '@lucia-auth/adapter-postgresql'
import {Discord} from 'arctic'
import {Lucia} from 'lucia'
import {type DatabaseUser, sql} from '../lib/database'

const adapter = new NeonHTTPAdapter(sql, {
  user: 'user',
  session: 'session',
})

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: attributes => {
    return {
      discordId: attributes.discord_id,
      username: attributes.username,
    }
  },
})

export const discord = new Discord(
  process.env.DISCORD_CLIENT_ID!,
  process.env.DISCORD_CLIENT_SECRET!,
  process.env.DISCORD_CALLBACK_URL!
)

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: Omit<DatabaseUser, 'id'>
  }
}
