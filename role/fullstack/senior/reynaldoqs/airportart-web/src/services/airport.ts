import crudder from "./services.helper";
import { AIRPORT_API } from "../config";
import { FullAirport } from "../types";

const airportAPI = crudder(AIRPORT_API)("airport");

// modelo de respuesta del API
type AirportResponse = {
  airports: FullAirport[];
};

// metodo para conseguir los aeropuertos del API
export const getAirports = (): Promise<AirportResponse> => {
  return airportAPI.read<AirportResponse>();
};
