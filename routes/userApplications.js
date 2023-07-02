import express from "express";

import { body } from "express-validator";
import validation from "../middleware/validation.js";
const router = express.Router();
import Application from "../models/applicationModel.js";
/*
route: api/applications
method: POST
description: create a new application
access: private
*/

router.post(
  "/",

  (req, res) => {}
);

/*
route: api/applications
method: GET
description: get applications
access: private
*/

router.get("/:userId", (req, res) => {});

/*
route: api/applications/application/applicationId
method: PUT
description: edit an application
access: private
*/

router.put(
  "/application/:applicationId/:userId",

  (req, res) => {}
);

/*
route: api/applications/application/applicationId
method: DELETE
description: delete application
access: private
*/

router.delete("/application/:applicationId/:userId", (req, res) => {});

export default router;
