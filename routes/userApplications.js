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

  [
    body("userId", "userId is required and should be an ID").not().isEmpty(),
    body("skills", "skills is required and should be an array of strings")
      .isArray()
      .not()
      .isEmpty(),
  ],
  validation,
  async (req, res) => {
    try {
      const { skills, userId } = req.body;

      const finalResult = new Application({
        user: userId,
        skills: [...skills],
      });

      finalResult.save();
      res.status(200).json({ message: "successfully added" });
    } catch (error) {
      console.log(error);
      res.status(500).send("server error");
    }
  }
);

/*
route: api/applications
method: GET
description: get applications
access: private
*/

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await Application.find({ user: userId }).exec();

    res.status(200).json({ result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

/*
route: api/applications/application/applicationId
method: PUT
description: edit an application
access: private
*/

router.put(
  "/application/:applicationId/:userId",

  async (req, res) => {
    try {
      const { applicationId, userId } = req.params;
      const { skills } = req.body;
      const result = await Application.findOneAndUpdate(
        { _id: applicationId, user: userId },
        {
          $set: {
            skills,
          },
        },
        { new: true }
      ).exec();
      res.json({ result });
    } catch (error) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

/*
route: api/applications/application/applicationId
method: DELETE
description: delete application
access: private
*/

router.delete("/application/:applicationId/:userId", async (req, res) => {
  try {
    const { applicationId, userId } = req.params;

    await Application.findOneAndDelete({
      _id: applicationId,
      user: userId,
    }).exec();
    res.json({ message: "successfully deleted" });
  } catch (error) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
