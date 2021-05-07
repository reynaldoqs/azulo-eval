import express from "express";
import cors from "cors";
import morgan from "morgan";

import { API_PORT } from "./config";
import { sequelize } from "./models";
import { airportsRouter } from "./routes";

const app = express();

// cors: para permitir el acceso a la API desde otro origen(dominio), este caso cualquier dominio.
app.use(cors());

// json: json parser para parsear los requests al formato json
app.use(express.json());

// logger para ver los requests al servicio
app.use(morgan("dev"));

// sincronizar la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

// "/airport" rutas para el manejor de aeropuertos
app.use("/airport", airportsRouter);

// inicializacion del servicio para que escuche las peticiones por el API_PORT
app.listen(API_PORT, () => {
  console.log("server listening on port: " + API_PORT);
});
