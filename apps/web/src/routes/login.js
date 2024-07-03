"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const loginRoute = async (c) => {
    const { login, password } = await c.req.json();
    const response = await createLogin(login, password);
    return c.json(response);
};
exports.loginRoute = loginRoute;
