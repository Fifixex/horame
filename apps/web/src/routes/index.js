"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const factory_1 = require("hono/factory");
const login_1 = require("./login");
const factory = (0, factory_1.createFactory)();
exports.routes = [
    {
        path: '/login',
        method: 'post',
        handlers: factory.createHandlers(login_1.loginRoute)
    },
    {
        path: '/register',
        method: 'get',
        handlers: factory.createHandlers((c) => c.text('Test'))
    }
];
