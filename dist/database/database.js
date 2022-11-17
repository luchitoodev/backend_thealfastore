"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'some-database',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_USER: process.env.DB_USER || 'postgres'
};
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = config;
exports.sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
});
//# sourceMappingURL=database.js.map