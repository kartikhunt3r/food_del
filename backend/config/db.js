import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ctf1cyber:KC3Vy5vNUoeR0Vwd@cluster0.vnfz0ra.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected!!");
    });
};
