const mongoose = require("mongoose");

async function connectDB() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not set in .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Database is connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
}

module.exports = connectDB;
