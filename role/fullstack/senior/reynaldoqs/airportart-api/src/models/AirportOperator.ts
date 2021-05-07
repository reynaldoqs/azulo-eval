import { Model, Optional, DataTypes } from "sequelize";
import { sequelize } from ".";

// Inferfaces para la tabla 'AirportOperator'
export interface AirportOperatorAttributes {
  ID: number;
  Name: string;
}

interface AirportOperatorCreationAttributes
  extends Optional<AirportOperatorAttributes, "ID"> {}

interface AirportOperatorInstance
  extends Model<AirportOperatorAttributes, AirportOperatorCreationAttributes>,
    AirportOperatorAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

// Modelo Sequilize para la tabla AirportOperator
const AirportOperator = sequelize.define<AirportOperatorInstance>(
  "AirportOperator",
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
  },
  {
    // Deshabilitar los campos (updatedAt, createdAt)
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

export default AirportOperator;

//INSERT INTO `AirportOperator` (`ID`, `Name`) VALUES (1, 'provident');
