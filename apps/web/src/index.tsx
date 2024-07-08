import {Layout} from '@repo/ui/layout'
import {Hono} from 'hono'
import {authDiscord} from './routes/discord'
import routes from './routes/index'

export const app = new Hono()

app.get('*', Layout)
app.get('/', c => c.render(''))
app.route('/', authDiscord)

routes.map(route =>
  app.on(route.method, route.path, ...route.handlers).basePath('/api/v9')
)
