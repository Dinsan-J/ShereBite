import express from "express";
import { postFood, getFood } from "../Controllers/food_controllers.js";

const router = express.Router();

router.post("/postFood", postFood);
router.get("/getFood", getFood);

export default router;
