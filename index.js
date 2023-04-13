import express from "express";
import createConnection from "./config/db";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

//create DB connection
createConnection();

//define routes

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
