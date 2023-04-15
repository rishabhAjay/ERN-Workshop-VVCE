import mongoose from "mongoose";
import User from "../../models/userModel.js";

export const get_logged_user_query = async (id) => {
  const user = await User.findOne({ _id: id }).select("-password");
  return user;
};

export const post_login_user_query = async (email) => {
  const result = await User.findOne({ email });
  return result;
};
