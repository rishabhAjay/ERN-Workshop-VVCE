import mongoose from "mongoose";
import { basicDetailsSchema } from "./subModels.js";

const ApplicationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },

    basicDetails: {
      type: basicDetailsSchema,
    },

    skills: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("application", ApplicationSchema);
