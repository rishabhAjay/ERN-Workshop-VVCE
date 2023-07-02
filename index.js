import express from "express";

import session from "express-session";

import MongoStore from "connect-mongo";

import cookieParser from "cookie-parser";
import { mongoURL, sessionSecret } from "./utils/envVariables.js";

const app = express();
app.use(express.json());

app.use(cookieParser());
const thirtySeconds = 1000 * 30;

app.use(
  session({
    secret: sessionSecret,
    saveUninitialized: false,
    cookie: { maxAge: thirtySeconds },
    resave: false,
    rolling: true,
    store: MongoStore.create({
      mongoUrl: mongoURL,
      dbName: "workshop-example-1",
      autoRemove: "native",
    }),
  })
);

const myusername = "user";
const mypassword = "password";
//define routes
app.post("/login", (req, res) => {
  try {
    if (req.body.username == myusername && req.body.password == mypassword) {
      req.session.user = req.body.username;
      console.log(req.session);
      res.json({
        data: `Hey there, welcome!`,
      });
    } else {
      res.json({
        data: `Invalid data`,
      });
    }
  } catch (error) {
    console.log("Error: ", error.message);
    res.json({
      data: `Could not login`,
    });
  }
});

app.get("/user", (req, res) => {
  try {
    res.json({ data: req.session.user });
  } catch (error) {
    console.log("Error: ", error.message);
    res.json({
      data: `No active session`,
    });
  }
});

app.post("/logout", (req, res) => {
  try {
    req.session.destroy();
    res.json({ data: "Logged out successfully" });
  } catch (error) {
    console.log("Error: ", error.message);

    res.json({
      data: `Could not logout`,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
