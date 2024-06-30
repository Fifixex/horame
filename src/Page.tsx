import { css } from "hono/css";
import type { FC } from "hono/jsx";

const pClass = css`
  color: red;
`;

export const Page: FC = () => {
  return <p class={pClass}>Hola que tal</p>;
};
