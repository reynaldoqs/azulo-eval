import AirtPort from "../models/AirtPort";

export const changeOperator = async (idAirport: any, idOperator: any) => {
  const airports = await AirtPort.findByPk(1, {
    raw: true,
  });
  console.log({ airports });
  return airports;
};
