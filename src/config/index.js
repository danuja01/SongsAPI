import mongoose from "mongoose";

export const configDB = () => {
  mongoose.connect(process.env.MONGO_URI).catch((err) => {
    console.log(`Error connecting to MongoDB: ${err}`);
  });

  mongoose.connection.on("connected", () => {
    console.log("Connected to database successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log(`Error connecting to database: ${err}`);
  });
};
