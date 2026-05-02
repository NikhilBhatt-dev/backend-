const ImageKit = require("@imagekit/nodejs")


const imagekit = new ImageKit({
  privateKey : process.env.PRIVATE_KEY  
})



async function uploadFile(buffer) {
    if (!process.env.PRIVATE_KEY) {
        throw new Error("PRIVATE_KEY not found in environment variables");
    }

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: `image-${Date.now()}.jpg`
    });

    return result;
}

module.exports =uploadFile;
