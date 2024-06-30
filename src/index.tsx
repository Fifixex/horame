import { Hono } from "hono";
import { Page } from "./Page";

const app = new Hono().basePath("/api/v9");

app.get("/", (c) => {
  return c.html(<Page />);
});

export { app };
