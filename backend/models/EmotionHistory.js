import { DataTypes } from "sequelize";
import db from "../config/db.js";
import User from "./User.js";

const EmotionHistory = db.define("EmotionHistory", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  emotion: {
    type: DataTypes.ENUM("Happy", "Sad"),
    allowNull: false,
  },
  confidence: {
    type: DataTypes.FLOAT, // e.g., 0.95 for 95%
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING, // URL if we store images (optional)
    allowNull: true,
  },
});

// Create Relationship: A User has many EmotionHistory records
User.hasMany(EmotionHistory, { onDelete: "CASCADE" });
EmotionHistory.belongsTo(User);

export default EmotionHistory;
