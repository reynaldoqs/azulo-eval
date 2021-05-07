import { Dialect } from "sequelize";

// configuracion para de la base de datos para Sequilize
export const dbConfig = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "root",
  PASS: process.env.DB_PASS || "audiman",
  DB: process.env.DB_NAME || "azulo",
  dialect: (process.env.DB_DIALECT || "mysql") as Dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
