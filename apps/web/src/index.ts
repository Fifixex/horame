import 'dotenv/config'
import {Hono} from 'hono'

import discord from './routes/discord.js'
import routes from './routes/index.js'

export const app = new Hono()

app.route('/', discord)

routes.map(route =>
  app.on(route.method, route.path, ...route.handlers).basePath('/api/v9')
)
