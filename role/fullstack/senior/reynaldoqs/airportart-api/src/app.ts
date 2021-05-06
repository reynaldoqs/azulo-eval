import express from "express";
import cors from "cors";
import morgan from "morgan";

import { API_PORT } from "./config";

const app = express();

// cors: para permitir el acceso a la API desde otro origen(dominio), este caso cualquier dominio.
app.use(cors());

// json: json parser para parsear los requests al formato json
app.use(express.json());

// logger para ver los requests al servicio
app.use(morgan("dev"));

// "/" ruta primaria para verificar el funcionamiento
app.use("/", (req, res) => {
  res.send("everything is going well.");
});

// inicializacion del servicio para que escuche las peticiones por el API_PORT
app.listen(API_PORT, () => {
  console.log("server listening on port" + API_PORT);
});
