import express from "express";
import { post_register_user_service } from "../../services/v1/userRegisterService.js";
import { body } from "express-validator";
import validation from "../../middleware/validation.js";
const router = express.Router();

/*
route: api/v1/register
method: POST
description: register a user
access: public
*/

router.post(
  "/",
  [
    body("name", "name is required").not().isEmpty(),
    body("email", "enter a valid email").isEmail(),
    body("password", "enter password with 8 or more characters").isLength({
      min: 8,
    }),
  ],
  validation,
  post_register_user_service
);

export default router;
