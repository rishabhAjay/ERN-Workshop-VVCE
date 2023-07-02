import express from "express";

import { body } from "express-validator";
import validation from "../middleware/validation.js";
const router = express.Router();
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
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
  async (req, res) => {
    let { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email }).exec();
      if (user) {
        return res
          .status(400)
          .json({ message: "User with that email already exists" });
      }

      //hashing the password
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      user = new User({
        name,
        email,
        password,
        role: "user",
      });

      const result = await user.save();

      res.status(201).json({ result: result._id });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("server error");
    }
  }
);

export default router;
