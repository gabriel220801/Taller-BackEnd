import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database/conexion.js";

const Solicitudes = db.define("solicitudes", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombreAdoptante: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fechaSolicitud: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    estado: {
        type: DataTypes.ENUM('Pendiente', 'Aprobada', 'Rechazada'),
        allowNull: false,
        defaultValue: 'Pendiente'
    }
}, {
    tableName: 'solicitudes',
    timestamps: false
});

export {Solicitudes}