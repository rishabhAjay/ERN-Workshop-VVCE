import dotenv from "dotenv";
dotenv.config();

export const sessionSecret = process.env.SESSION_SECRET;
export const mongoURL = process.env.MONGO_URL;
