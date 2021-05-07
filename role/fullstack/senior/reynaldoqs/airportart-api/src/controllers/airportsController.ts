import AirtPort from "../models/AirtPort";

// Cambia el operador de un aeropuerto a otro
export const changeOperator = (airportId: number, operatorId: number) => {
  return AirtPort.update(
    { AirportOperatorID: operatorId },
    { where: { ID: airportId } }
  );
};

type OrderChange = {
  airportId: number;
  newOrder: number;
};
// Metodo para cambiar el PriorityOrder de un aeropuerto
export const changePriorityOrder = async (...priorityOrders: OrderChange[]) => {
  const updatePromises = priorityOrders.map(({ airportId, newOrder }) =>
    AirtPort.update({ PriorityOrder: newOrder }, { where: { ID: airportId } })
  );
  await Promise.all(updatePromises);
  return AirtPort.findAll({ raw: true });
};
