import {OAuth2RequestError, generateState} from 'arctic'
import {Hono} from 'hono'
import {getCookie, setCookie} from 'hono/cookie'
import {generateId} from 'lucia'
import {discord, lucia} from '../lib/auth'

export const authDiscord = new Hono()

authDiscord.get('/login/discord', async c => {
  const state = generateState()
  const url = await discord.createAuthorizationURL(state)
  setCookie(c, 'discord_oauth_state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'Lax',
  })
  return c.redirect(url.toString())
})

authDiscord.get('/login/discord/callback', async c => {
  const code = c.req.query('code')?.toString() ?? null
  const state = c.req.query('state')?.toString() ?? null
  const storedState = getCookie(c).discord_oauth_state ?? null
  if (!code || !state || !storedState || state !== storedState) {
    return c.body(null, 400)
  }
  try {
    const userId = generateId(15)
    const session = await lucia.createSession(userId, {})
    c.header('Set-Cookie', lucia.createSessionCookie(session.id).serialize(), {
      append: true,
    })

    return c.redirect('/')
  } catch (error) {
    if (
      error instanceof OAuth2RequestError &&
      error.message === 'bad_verification_code'
    ) {
      return c.body(null, 400)
    }
    return c.body(null, 500)
  }
})
