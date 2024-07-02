import {css} from 'hono/css'
import type {FC} from 'hono/jsx'
import {Layout} from './Layout'

const pClass = css`
  color: red;
`

export const Page: FC = () => {
  return (
    <Layout>
      <p class={pClass}>Hola que tal</p>
    </Layout>
  )
}
