import express from "express";
import {
  get_logged_user_service,
  post_login_user_service,
} from "../services/userAuthService";

const router = express.Router();

/*
route: api/auth
method: GET
description: get user's details
access: private
*/

router.get("/", get_logged_user_service);

/*
route: api/auth
method: POST
description: login a user
access: public
*/

router.post("/", post_login_user_service);

export default router;
