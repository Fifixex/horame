import {serve} from '@hono/node-server'
import {Layout} from '@repo/ui'
import {app} from './src/index'

console.log('💸 Server running on port: 3000')
app.get('/', c => c.html(<Layout />))
serve({
  port: 3000,
  fetch: app.fetch,
})
