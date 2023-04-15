import mongoose from "mongoose";

export const basicDetailsSchema = mongoose.Schema({
  dob: {
    type: Date,
  },
  phone: {
    type: Number,
    required: true,
  },
});
