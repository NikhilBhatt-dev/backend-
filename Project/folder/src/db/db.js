const mongoose  = require('mongoose')
async function connectDB(){
    try {
        if(!process.env.MONGODB_URI){
            throw new error("env is not set")
            
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database is connected")
    } catch (error) {
        console.error(error.message);
        
    }
}


module.exports = connectDB;