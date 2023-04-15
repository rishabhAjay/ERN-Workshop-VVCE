import express from "express";
import { post_register_user_service } from "../services/userRegisterService";

const router = express.Router();

/*
route: api/register
method: POST
description: register a user
access: public
*/

router.post(
  "/",

  post_register_user_service
);

export default router;
