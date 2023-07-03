import express from "express";
import cors from "cors";
import { PORT } from "./utils/constants.js";
import http from "http";

// WITH OUT EXPRESS FRAMEWORK

// const server = http.createServer(async (req, res) => {
//   //set the request route
//   if (req.url === "/" && req.method === "GET") {
//     //response headers
//     res.writeHead(200, { "Content-Type": "application/json" });
//     //set the response
//     res.write("welcome to node express basics");
//     //end the response
//     res.end();
//   }

//   // If no route present
//   else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Route not found" }));
//   }
// });
// server.listen(PORT, () => {
//   console.log(`server started on port: ${PORT}`);
// });

// WITH EXPRESS FRAMEWORK

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

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
