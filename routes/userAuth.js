import express from "express";

import {
  get_logged_user_service,
  post_login_user_service,
} from "../../services/v1/userAuthService.js";

const router = express.Router();

/*
route: api/v1/register
method: GET
description: register a user
access: private
*/

router.get("/", get_logged_user_service);

router.post("/", post_login_user_service);

export default router;
