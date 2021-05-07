import { Router } from "express";

import {
  changeOperator,
  changePriorityOrder,
  getAirports,
} from "../controllers";

const airportsRouter = Router();

// rutas para aeropuertos
// get para obtener todos los aeropuertos
airportsRouter.get("/", async (_, res) => {
  try {
    const airports = await getAirports();
    return res.status(200).json({ airports });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// patch para cambiar los datos de un aeropuerto
airportsRouter.patch("/:airportId", async (req, res) => {
  try {
    // elementos a cambiar en el aeropuerto, en este caso solo el operador
    const { operatorId } = req.body;
    // id del aeropuerto a ser modificado
    const { airportId } = req.params;
    const airport = await changeOperator(Number(airportId), operatorId);
    return res.status(200).json({ airport });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// patch para cambiar los ordenes de prioridad
airportsRouter.post("/set-priorities", async (req, res) => {
  try {
    // array de orden de prioridades
    const { priorityOrders } = req.body;
    const response = await changePriorityOrder(...priorityOrders);
    return res.status(200).json({ response });
  } catch (error) {
    return res.status(400).json({ error });
  }
});
export default airportsRouter;
