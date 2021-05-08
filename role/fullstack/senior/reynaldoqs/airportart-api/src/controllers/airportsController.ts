import AirtPort from "../models/AirtPort";
import Location from "../models/Location";
import AirportOperator from "../models/AirportOperator";
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
  return AirtPort.findAll();
};

export type OrderConfig = "ASC" | "DESC";

// Metodo para obtener todos los aeropuertos
export const getAirports = async (config: OrderConfig = "ASC") => {
  // Metodo para conseguir los datos de las assocciaciones, por alguna razon no esta registrando bien las associaciones
  //TODO: configure well squilize associations
  console.log({ config });
  const airports: any = await AirtPort.findAll({
    raw: true,
    order: [["PriorityOrder", config]],
  });

  for (const airport of airports) {
    airport.location = await Location.findByPk(airport.LocationID, {
      raw: true,
    });
    airport.operator = await AirportOperator.findByPk(
      airport.AirportOperatorID,
      {
        raw: true,
      }
    );
  }

  return airports;
};
