//import routes
import userAuth from "./routes/v1/userAuth.js";
import userRegister from "./routes/v1/userRegister.js";
import userApplications from "./routes/v1/userApplications.js";
import express from "express";
import cors from "cors";
import connectDB from "./data/db.js";
import { PORT } from "./utils/envVariables.js";

const app = express();
// bb.extend(app);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

//create the connection
connectDB();

//define routes
app.use("/api/v1/auth", userAuth);
app.use("/api/v1/register", userRegister);
app.use("/api/v1/applications", userApplications);

//API documentation route

app.get("/", (req, res) => {
  res.json({ status: "welcome to job application backend" });
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
