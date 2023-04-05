import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(
    `mongodb+srv://Leo:${process.env.MONGODB_PASSWORD}@leo.s9beivo.mongodb.net/sample_mflix`
  )
  .then(() => console.log("connect"));

export default mongoose.connection;
