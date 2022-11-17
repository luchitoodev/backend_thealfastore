import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_NAME: process.env.DB_NAME || 'some-database',
    DB_PASSWORD: process.env.DB_PASSWORD || 'password',
    DB_USER: process.env.DB_USER || 'postgres'
}

const {DB_HOST, DB_NAME, DB_PASSWORD, DB_USER} = config

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false
});
