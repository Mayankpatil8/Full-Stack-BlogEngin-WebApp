import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database Connected")
    );

    // ✅ Append DB name only once
    await mongoose.connect(`${process.env.MONGODB_URI}quickblog`);
  } catch (error) {
    console.log("DB Error:", error.message);
  }
};

export default connectDB;
