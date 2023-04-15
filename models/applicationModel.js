import mongoose from "mongoose";
import { basicDetailsSchema } from "./subModels.js";

const ApplicationSchema = mongoose.Schema();

export default mongoose.model("application", ApplicationSchema);
