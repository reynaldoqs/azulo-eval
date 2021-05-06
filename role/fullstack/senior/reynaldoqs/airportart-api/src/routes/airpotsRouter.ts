import { Router } from "express";

import { changeOperator } from "../controllers";

const airportsRouter = Router();

airportsRouter.get("/", async (req, res) => {
  console.log("entra a esta ruta");
  const airport = await changeOperator("asda", "asd");
  console.log({ airport });
  res.send("todo bonito");
});

export default airportsRouter;
