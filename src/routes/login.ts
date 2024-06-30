import { Hono } from "hono";
import { createLogin } from "../lib/utils";

export const loginRoute = new Hono();

loginRoute.post("/login", async (c) => {
  const { login, password } = await c.req.json();

  const response = await createLogin(login, password);
  return c.json(response);
});
