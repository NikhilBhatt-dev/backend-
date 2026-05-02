const express = require("express")
const multer = require("multer")
const uploadFile  =  require("./services/storage.service");
const postModel = require("./model/post.model");
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})


app.post('/create-post', upload.single("image"),async(req, res) => {
try {
const { caption } = req.body;

if (!req.file) {
    return res.status(400).json({ message: "Image file is required" });
}

const result = await uploadFile(req.file.buffer)

const post = await postModel.create({
    image: result.url,
    caption:req.body.caption 
});

return res.status(201).json({
    message: "Post created successfully",
    post,
    imagekit: result,
});
} catch (error) {
    console.error("Create post error:", error.message);
    return res.status(500).json({ message: error.message });
}
})


app.get("/posts", async (req,res) => {
    const post = await postModel.find()

    return res.status(200).json({
        message: "Post created successfully",
        post,
    });     

})

module.exports = app
