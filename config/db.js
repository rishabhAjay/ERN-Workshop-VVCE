import mongoose from "mongoose";
import { mongoURL } from "../utils/envVariables.js";

const connectDB = async () => {
  try {
    console.log(mongoURL);
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "crud-app",
    });

    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
