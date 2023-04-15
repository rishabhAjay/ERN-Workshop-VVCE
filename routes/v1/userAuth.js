import express from "express";

import auth from "../../middleware/auth.js";

import {
  get_logged_user_service,
  post_login_user_service,
} from "../../services/v1/userAuthService.js";
import { check } from "express-validator";
import validation from "../../middleware/validation.js";
const router = express.Router();

router.get("/", auth, get_logged_user_service);

router.post(
  "/",
  [
    check("email", "enter a valid email").exists().isEmail(),
    check("password", "password is required").exists(),
  ],
  validation,
  post_login_user_service
);

export default router;
