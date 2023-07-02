import mongoose from "mongoose";

const ApplicationSchema = mongoose.Schema();

export default mongoose.model("application", ApplicationSchema);
