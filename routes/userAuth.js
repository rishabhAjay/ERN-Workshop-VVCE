import express from "express";

import auth from "../middleware/auth.js";

import {
  get_logged_user_service,
  post_login_user_service,
} from "../services/userAuthService.js";
import { check } from "express-validator";
import validation from "../middleware/validation.js";
const router = express.Router();

/*
route: api/auth
method: GET
description: get user's details
access: private
*/

router.get("/", auth, get_logged_user_service);

/*
route: api/auth
method: POST
description: login a user
access: public
*/

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
