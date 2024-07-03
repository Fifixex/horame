import {css} from 'hono/css'
import type {FC} from 'hono/jsx'
import {Layout} from './Layout'

// Estilo CSS utilizando el módulo 'hono/css'
const containerStyle = css`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`

const textStyle = css`
  font-size: 18px;
  color: #666;
`

const linkStyle = css`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`

// Definición del componente Page utilizando FC (Functional Component)
export const Page: FC = () => {
  return (
    <Layout>
      <div class={containerStyle}>
        <h1>Verification Required</h1>
        <p class={textStyle}>
          To verify yourself, please click the{' '}
          <a
            href="https://example.com"
            target="_blank"
            class={linkStyle}
            rel="noreferrer"
          >
            blue link
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}
