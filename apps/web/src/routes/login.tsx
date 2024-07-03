<<<<<<< HEAD
import { createLogin } from "../lib/utils";

export const loginRoute = async (c: any) => {
  const { login, password } = await c.req.json();
  const response = await createLogin(login, password);
  return c.json(response);
};
=======
export const loginRoute = async c => {
  const {login, password} = await c.req.json()
  const response = await createLogin(login, password)
  return c.json(response)
}
>>>>>>> 6e1923746cdf120da2ceaa45e0206a1bd8345b11
