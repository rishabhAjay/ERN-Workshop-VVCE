import mongoose from "mongoose";
import { mongoURL } from "../utils/envVariables.js";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "crud-app-minified",
    });

    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
