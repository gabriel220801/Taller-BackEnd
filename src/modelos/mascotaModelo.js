import { Sequelize, DataTypes } from "sequelize";
import { db } from "../database/conexion.js";

const Mascotas = db.define("mascotas", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Macho', 'Hembra'),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING, // Ruta de la imagen o URL
        allowNull: true
    }
}, {
    tableName: 'mascotas', // Nombre de la tabla en la base de datos
    timestamps: false
});



export {Mascotas}

