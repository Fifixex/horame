export const loginRoute = async (c) => {
  const {login, password} = await c.req.json()
  const response = await createLogin(login, password)
  return c.json(response)
})
