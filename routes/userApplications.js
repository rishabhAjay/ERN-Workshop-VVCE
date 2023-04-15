import express from "express";

import {
  delete_application_by_id_service,
  get_applications_by_user_service,
  post_application_by_jobId_service,
  put_edit_application_by_id_service,
} from "../services/userApplicationServices.js";

const router = express.Router();

router.post("/", post_application_by_jobId_service);

router.get("/", get_applications_by_user_service);

router.put("/application/:applicationId", put_edit_application_by_id_service);

router.delete("/application/applicationId", delete_application_by_id_service);

export default router;
