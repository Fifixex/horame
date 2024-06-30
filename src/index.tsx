import {Hono} from 'hono'
import {Page} from './Page'

import Routes from './routes'

export const app = new Hono()

app.get('/', c => c.html(<Page />))

app.get('/health', c => c.text('Ok!'))
app.route('/api/v9', Routes)
