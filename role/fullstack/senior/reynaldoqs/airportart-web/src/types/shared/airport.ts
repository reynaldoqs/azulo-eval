import { Location, AirportOperator } from "./";

export interface Airport {
  ID: number;
  Name: string;
  AirPortCode: string;
  PriorityOrder: number;
  LocationID: number;
  AirportOperatorID: number;
  currentPriority?: number;
}

export interface FullAirport extends Airport {
  location: Location;
  operator: AirportOperator;
}
