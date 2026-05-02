require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB();

app.get("/", (req, res) => {
  res.send("this is a page");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
