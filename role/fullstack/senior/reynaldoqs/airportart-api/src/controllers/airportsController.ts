import AirtPort from "../models/AirtPort";

// Cambia el operador de un aeropuerto a otro
export const changeOperator = async (airportId: number, operatorId: number) => {
  const airport = await AirtPort.findByPk(airportId);
  if (!airport) throw `${airportId} do es not exist.`;
  return airport.update({ AirportOperatorID: operatorId });
};
