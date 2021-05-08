import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from ".";
import AirtPort from "./AirtPort";

// Inferfaces para la tabla 'Location'
export interface LocationAttributes {
  ID: number;
  Country: string;
  ProvinceOrState: string;
  Longitude: string;
  Latitude: string;
}

interface LocationCreationAttributes
  extends Optional<LocationAttributes, "ID"> {}

interface LocationInstance
  extends Model<LocationAttributes, LocationCreationAttributes>,
    LocationAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

// Modelo Sequilize para la tabla Location
const Location = sequelize.define<LocationInstance>(
  "Location",
  {
    ID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    Country: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    ProvinceOrState: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    Longitude: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    Latitude: {
      allowNull: true,
      type: DataTypes.TEXT,
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
Location.hasMany(AirtPort, {
  sourceKey: "ID",
  foreignKey: "LocationID",
  as: "AirtPorts",
});*/

export default Location;

//INSERT INTO `Location` (`ID`, `Country`, `ProvinceOrState`, `Longitude`, `Latitude`) VALUES (1, 'UT', 'Missouri', '8.000000', '7.000000');
