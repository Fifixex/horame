import { Hono } from "hono";
import { loginRoute } from "./login";

export const indexRoute = new Hono().get("/health", (c) => c.text("Ok!"));

export default [indexRoute, loginRoute];
