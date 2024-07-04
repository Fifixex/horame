import {Page} from '@repo/ui/src/page'
import {Hono} from 'hono'

import routes from './routes'

export const app = new Hono()

app.get('/', c => c.html(<Page />))

app.get('/health', c => c.text('Ok!'))
routes.map(route => app.on(route.method, route.path, ...route.handlers))
