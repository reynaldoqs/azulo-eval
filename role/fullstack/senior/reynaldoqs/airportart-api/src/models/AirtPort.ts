import { Model, Optional, DataTypes } from "sequelize";

import { sequelize } from ".";
import Location from "./Location";
import AirportOperator from "./AirportOperator";

// Inferfaces para la tabla 'Airport'
export interface AirportAttributes {
  ID: number;
  Name: string;
  AirPortCode: string;
  PriorityOrder: number;
  LocationID: number;
  AirportOperatorID: number;
}

interface AirportCreationAttributes extends Optional<AirportAttributes, "ID"> {}

interface AirportInstance
  extends Model<AirportAttributes, AirportCreationAttributes>,
    AirportAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

// Modelo Sequilize para la tabla Airport
const AirtPort = sequelize.define<AirportInstance>(
  "AirPort",
  {
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    Name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    AirPortCode: { allowNull: true, type: DataTypes.TEXT },
    PriorityOrder: { allowNull: true, type: DataTypes.INTEGER },
    LocationID: { type: DataTypes.INTEGER, unique: false },
    AirportOperatorID: {
      type: DataTypes.INTEGER,
      unique: false,
    },
  },
  {
    // Deshabilitar los campos (updatedAt, createdAt)
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);
/*
AirtPort.belongsTo(Location, {
  foreignKey: "LocationID",
  as: "Location",
});

Airport.hasOne(AirportOperator, {
  foreignKey: "AirportOperatorID",
  as: "AirportOperator",
});*/

export default AirtPort;

//INSERT INTO `AirPort` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (1, 'Ms.', 'incidunt', 0, 1, 1);
