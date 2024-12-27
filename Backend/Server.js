import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./DB/Connect_To_MongoDB.js";
import authRoutes from "./routes/auth_Routes.js";
import foodRoutes from "./routes/food_Routes.js";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/food", foodRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server Running On Port ${PORT}`);
});
