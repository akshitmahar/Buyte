import mongoose from "mongoose";
export const connectDB = async () => {
  mongoose.set("strictQuery", false);
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "BuyteDB",
    });

    console.log(`Server connected to database ${connection.host}`);
  } catch (error) {
    console.log("Some Error Occurred", error);
    process.exit(1);
  }
};
