import  Sequelize from "sequelize";

const db = new Sequelize("dbmascotas", "tallerMascota", "tallerMascota",{
    dialect: "mysql",
    host: "localhost"
});

export {db}
