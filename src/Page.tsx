import type { FC } from "hono/jsx"
import { css } from "hono/css"

const pClass = css`
  color: red;
`

export const Page: FC = () => {
  return <p class={pClass}>Hola que tal</p>
}