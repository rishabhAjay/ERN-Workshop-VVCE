import express from "express";
import cors from "cors";
import { PORT } from "./utils/constants.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// CROSS ORIGIN RESOURCE
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to node express basics");
  // res.json({
  //   message: "welcome to node express basics",
  // });
});

// LISTENING TO A PORT AND CALLBACK
app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

// import basicAuth from "express-basic-auth";
// import myAuthorizer from "./auth/basicAuthorization.js";
// import taskCrud from "./routes/v1/taskCrudRoutes.js";
// Basic authorization
// app.use(basicAuth({ authorizer: myAuthorizer }));
// ROUTER
// app.use("/api/v1/tasks", taskCrud);
