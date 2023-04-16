import User from "../models/userModel.js";

export const post_check_user_query = (email) => {
  let user = User.findOne({ email }).exec();
  return user;
};

export const post_register_user_query = (name, email, password) => {
  let user = new User({
    name,
    email,
    password,
    role: "user",
  });

  return user.save();
};
