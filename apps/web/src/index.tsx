import {Page} from '@repo/ui/src/page'
import {Hono} from 'hono'

import {authDiscord} from './routes/discord'
import routes from './routes/index'

export const app = new Hono()

app.get('/', c => c.html(<Page />))
app.route('/', authDiscord)

routes.map(route =>
  app.on(route.method, route.path, ...route.handlers).basePath('/api/v9')
)
