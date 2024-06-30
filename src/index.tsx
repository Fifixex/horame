import { Hono } from "hono";
import { Page } from "./Page";

export const app = new Hono()

app.get("/", (c) =>  c.html(<Page />));