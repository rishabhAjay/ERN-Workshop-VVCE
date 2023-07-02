import express from "express";

import { body } from "express-validator";
import validation from "../middleware/validation.js";
const router = express.Router();
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
router.post(
  "/",

  (req, res) => {}
);

export default router;
