const mongoose = require("mongoose");

async function connectDB() {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI not found in environment variables");
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ Connected to DB");
    } catch (err) {
        console.error("❌ DB Connection Error:", err.message);
        process.exit(1); 
    }
}

module.exports = connectDB;