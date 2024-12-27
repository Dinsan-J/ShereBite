import express from "express";
import {
  signupuser,
  loginUser,
  logoutUser,
} from "../Controllers/auth_Controllers.js";

const router = express.Router();

router.post("/signup", signupuser);

router.post("/login", loginUser);

router.post("/logout", logoutUser);

export default router;
