import { Hono } from 'hono'
import { createLogin } from '../lib/utils'

export const loginRoute = new Hono()

loginRoute.post('/login', async (c) => {
    let { login, password } = await c.req.json()

    let response = await createLogin(login, password)
    return c.json(response)
})
