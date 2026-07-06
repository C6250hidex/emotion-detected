import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/db.js";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/User.js";
import EmotionHistory from "./models/EmotionHistory.js";

dotenv.config();

const app = express();
app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend-link.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }),
);

app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("AI Emotion API is running...");
});

const initApp = async () => {
  try {
    await db.authenticate();
    console.log("✅ TiDB Connected via Sequelize...");

    await db.sync(); // Creates tables
    console.log("✅ Tables Synchronized");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
  } catch (error) {
    console.error("❌ Connection Error:", error);
  }
};

initApp();
