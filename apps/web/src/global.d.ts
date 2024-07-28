type Methods = ['get', 'post', 'put', 'delete', 'options', 'patch'][number]
interface User {
  id: string
  username?: string
  token: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
}
