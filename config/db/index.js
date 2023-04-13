import mongoose from "mongoose";
import { mongoURL } from "../../utils/envVariables.js";
const connection = mongoURL;

const createConnection = () => {
  try {
    return mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export default createConnection;
