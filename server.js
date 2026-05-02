<<<<<<< HEAD
//server ko start krna


const app = require('./src/app')

app.listen(3000,()=> {
    console.log("server is live on port 3000")
})
=======
require("dotenv").config();

const app = require('./src/app')
const connectDB = require('./src/db/db')


connectDB()

app.get("/",(req, res) => {
    res.send("this is a page")
})

app.listen(3000,() => {
    console.log("server is runing on port is on 3000")
})
>>>>>>> d6f14ed (upload new code)
