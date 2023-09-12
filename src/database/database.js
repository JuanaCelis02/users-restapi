import { Sequelize } from "sequelize";

//Name DB, DB, password
export const sequelize = new Sequelize('postgres', 'postgres', 'contrasena', {
     host: 'localhost',
     dialect: 'postgres'
})