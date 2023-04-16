import mongoose from "mongoose";
import User from "../models/userModel.js";

export const get_logged_user_query = (id) => {
  const user = User.findOne({ _id: id }).select("-password").exec();
  return user;
};

export const post_login_user_query = (email) => {
  const result = User.findOne({ email }).exec();
  return result;
};
