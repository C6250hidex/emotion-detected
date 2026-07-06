import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 4000,
    dialect: "mysql",
    logging: false,
    dialectOptions: {
      ssl:
        process.env.NODE_ENV === "production" ||
        process.env.DB_HOST.includes("tidbcloud.com")
          ? {
              minVersion: "TLSv1.2",
              rejectUnauthorized: true,
            }
          : null,
    },
  },
);

export default db;
