"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
const jsx_runtime_1 = require("hono/jsx/jsx-runtime");
const css_1 = require("hono/css");
const Layout_1 = require("./Layout");
// Estilo CSS utilizando el módulo 'hono/css'
const containerStyle = (0, css_1.css) `
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;
const textStyle = (0, css_1.css) `
  font-size: 18px;
  color: #666;
`;
const linkStyle = (0, css_1.css) `
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;
// Definición del componente Page utilizando FC (Functional Component)
const Page = () => {
    return ((0, jsx_runtime_1.jsx)(Layout_1.Layout, { children: (0, jsx_runtime_1.jsxs)("div", { class: containerStyle, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Verification Required" }), (0, jsx_runtime_1.jsxs)("p", { class: textStyle, children: ["To verify yourself, please click the", ' ', (0, jsx_runtime_1.jsx)("a", { href: "https://example.com", target: "_blank", class: linkStyle, children: "blue link" }), "."] })] }) }));
};
exports.Page = Page;
