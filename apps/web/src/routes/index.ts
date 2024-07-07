import type {Handler, MiddlewareHandler} from 'hono'
import {createFactory} from 'hono/factory'
import {router} from '../lib/router'

interface Routes {
  path: string
  method: Methods
  handlers: (Handler | MiddlewareHandler)[]
}

const factory = createFactory()

const routes: Routes[] = [
  {
    path: '/auth/login',
    method: 'post',
    handlers: factory.createHandlers(router),
  },
  {
    path: '/auth/register',
    method: 'post',
    handlers: factory.createHandlers(router),
  },
  {
    path: '/unique-username/username-attempt-unauthed',
    method: 'post',
    handlers: factory.createHandlers(router),
  },
]

export default routes
