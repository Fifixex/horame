import { createLogin } from "../lib/utils";

export const loginRoute = async (c: any) => {
  const { login, password } = await c.req.json();
  const response = await createLogin(login, password);
  return c.json(response);
};
