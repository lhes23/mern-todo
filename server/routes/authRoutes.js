import express from "express";
import { login, logout, index } from "../controller/authController.js";

const router = express.Router();

router.get("/", index);
router.get("/login", login);
router.get("/logout", logout);

export default router;
