import express from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "./utils/envVariables.js";
import auth from "./middlewares/auth.js";
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

const userDB = {
  id: 1,
  email: "abc@gmail.com",
  password: "hello123",
};
//define routes
app.get("/user", auth, async (req, res) => {
  try {
    const { userId } = req;

    res.json({ user: userId });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (userDB.email !== email) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (userDB.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const payload = {
      userId: userDB.id,
    };

    jwt.sign(
      payload,
      //pass the secret
      jwtSecret,
      {
        //in minutes
        expiresIn: 86400000,
      },
      (err, token) => {
        if (err) throw err;
        return res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send("server error");
  }
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
