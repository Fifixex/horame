"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const jsx_runtime_1 = require("hono/jsx/jsx-runtime");
const hono_1 = require("hono");
const page_1 = require("@repo/ui/page");
const routes_1 = __importDefault(require("./routes"));
exports.app = new hono_1.Hono();
exports.app.get('/', c => c.html((0, jsx_runtime_1.jsx)(page_1.Page, {})));
exports.app.get('/health', c => c.text('Ok!'));
routes_1.default.map((route) => exports.app.on(route.method, route.path, ...route.handlers));
