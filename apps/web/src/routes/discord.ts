import {Hono} from 'hono'
import {getCookie, setCookie} from 'hono/cookie'
import {OAuth2RequestError, generateState} from 'oslo/oauth2'
import {createAuthorizationURL} from '../lib/utils.js'

const app = new Hono()

app.get('/login/discord', async c => {
  const state = generateState()
  const url = await createAuthorizationURL(state, {scopes: ['identify', 'guilds.join']})
  setCookie(c, 'discord_oauth_state', state, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'Lax',
  })
  return c.redirect(url.toString())
})

app.get('/login/discord/callback', async c => {
  const code = c.req.query('code')?.toString() ?? null
  const state = c.req.query('state')?.toString() ?? null
  const storedState = getCookie(c).discord_oauth_state ?? null
  if (!code || !state || !storedState || state !== storedState) {
    return c.body(null, 400)
  }
  try {
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

export default app
