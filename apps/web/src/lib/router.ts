import type {Context} from 'hono'
import {fetcher} from '../lib/utils.js'

export const router = async (c: Context) => {
  const body = await c.req.json()
  const response = await fetcher(c.req.path, 'post', body)
  return c.json({response})
}
