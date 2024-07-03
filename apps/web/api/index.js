"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vercel_1 = require("@hono/node-server/vercel");
const src_1 = require("../src");
exports.default = (0, vercel_1.handle)(src_1.app);
