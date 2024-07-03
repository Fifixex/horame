import { MiddlewareHandler, Handler, Hono } from "hono";
import { createFactory } from "hono/factory";

import { loginRoute } from "./login";

type Methods = ["get", "post", "put", "delete", "options", "patch"][number];

interface Routes {
  path: string;
  method: Methods;
  handlers: (Handler | MiddlewareHandler)[];
}

const factory = createFactory();

const routes: Routes[] = [
  {
    path: "/login",
    method: "post",
    handlers: factory.createHandlers(loginRoute),
  },
  {
    path: "/register",
    method: "get",
    handlers: factory.createHandlers((c) => c.text("Test")),
  },
];

export default routes;
