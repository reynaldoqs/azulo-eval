import { Model, Optional, DataTypes } from "sequelize";

import { sequelize } from ".";
import Location from "./Location";
import AirportOperator from "./AirportOperator";

// Inferfaces para la tabla 'Airport'
interface AirportAttributes {
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
const Airport = sequelize.define<AirportInstance>(
  "AirPort",
  {
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    Name: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    AirPortCode: { allowNull: true, type: DataTypes.TEXT },
    PriorityOrder: { allowNull: true, type: DataTypes.INTEGER },
    LocationID: { allowNull: true, type: DataTypes.INTEGER },
    AirportOperatorID: { allowNull: true, type: DataTypes.INTEGER },
  },
  {
    // Deshabilitar los campos (updatedAt, createdAt)
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

Airport.hasOne(Location, {
  foreignKey: "LocationID",
  as: "Location",
});

Airport.hasOne(AirportOperator, {
  foreignKey: "AirportOperatorID",
  as: "AirportOperator",
});

export default Airport;

//INSERT INTO `AirPort` (`ID`, `Name`, `AirPortCode`, `PriorityOrder`, `LocationID`, `AirportOperatorID`) VALUES (1, 'Ms.', 'incidunt', 0, 1, 1);
