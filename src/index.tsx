import { Hono } from "hono";
import { Page } from "./Page";

import routes from "./routes";

export const app = new Hono();

app.get("/", (c) => c.html(<Page />));

app.get("/health", (c) => c.text("Ok!"));
routes.map((route) => app.route("/api/v9", route));
