import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js' //permite crear tablas y diseñar las relaciones de la BD

//Definicion de tabla (nombre de tabla, objeto define campos de tabla)
sequelize.define('users',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    numberDocument: {
        type: DataTypes.STRING
    },
    bithDate: {
        type: DataTypes.DATE
    },
    phoneNumber: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    registrationDate: {
        type: DataTypes.DATE
    },
    direction: {
        type: DataTypes.STRING
    }
}, {
    timestamps:false
})