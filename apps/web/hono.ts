import {serve} from '@hono/node-server'
import {app} from './src/index'

console.log('💸 Server running on port: 3000')
serve({
  port: 3000,
  fetch: app.fetch,
})
