import express from "express";
import { post_register_user_service } from "../../services/v1/userRegisterService.js";

const router = express.Router();

/*
route: api/v1/register
method: POST
description: register a user
access: public
*/

router.post(
  "/",

  post_register_user_service
);

export default router;
