import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js' //permite crear tablas y diseñar las relaciones de la BD 

export const UserRole = sequelize.define('userRoles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER
    },
    roleId: {
        type: DataTypes.INTEGER
    }
})