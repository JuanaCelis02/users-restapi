import { Sequelize } from "sequelize";

//Name DB, DB, password
export const sequelize = new Sequelize('UsersDB', 'postgres', 'contrasena', {
     host: 'localhost',
     dialect: 'postgres'
})