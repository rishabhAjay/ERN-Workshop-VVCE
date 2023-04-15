import User from "../../models/userModel.js";

export const post_check_user_query = async (email) => {
  let user = await User.findOne({ email });
  return user;
};

export const post_register_user_query = async (name, email, password) => {
  let user = new User({
    name,
    email,
    password,
    role: "user",
  });

  return await user.save();
};
