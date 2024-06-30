// import { serve } from "@hono/node-server";
import { Hono } from "hono";

import { BASE_PATH, PORT } from "./config";

import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

// import { loginRoute } from "./routes";

const app = new Hono().basePath(BASE_PATH);

app.use("*", prettyJSON(), logger());
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
  }),
);

// app.route("/auth", loginRoute);

import { Page } from './Page'

app.get('/', (c) => {
  return c.html(<Page />);
})


console.log(`Server is running on port ${PORT}`);

// serve({
//   fetch: app.fetch,
//   port: +(process.env.PORT ?? PORT),
// });

export { app };
