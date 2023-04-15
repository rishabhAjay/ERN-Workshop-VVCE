import express from "express";
import auth from "../middleware/auth.js";

import {
  delete_application_by_id_service,
  get_applications_by_user_service,
  post_application_by_jobId_service,
  put_edit_application_by_id_service,
} from "../services/userApplicationServices.js";
import { body } from "express-validator";
import validation from "../middleware/validation.js";
const router = express.Router();

/*
route: api/applications
method: POST
description: create a new application
access: private
*/

router.post(
  "/",
  auth,

  [
    body("dob", "dob is required and should be a string")
      .isString()
      .not()
      .isEmpty(),
    body("phone", "phone number is required and should be numbers")
      .isNumeric()
      .not()
      .isEmpty(),

    body("skills", "skills is required and should be an array of strings")
      .isArray()
      .not()
      .isEmpty(),
  ],
  validation,
  post_application_by_jobId_service
);

/*
route: api/applications
method: GET
description: get applications
access: private
*/

router.get("/", auth, get_applications_by_user_service);

/*
route: api/applications/application/applicationId
method: PUT
description: edit an application
access: private
*/

router.put(
  "/application/:applicationId",
  auth,
  put_edit_application_by_id_service
);

/*
route: api/applications/application/applicationId
method: DELETE
description: delete application
access: private
*/

router.delete(
  "/application/applicationId",
  auth,
  delete_application_by_id_service
);

export default router;
