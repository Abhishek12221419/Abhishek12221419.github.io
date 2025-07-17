import express from "express";
const app = express();

// Serve static images from "images" folder
app.use("/images", express.static("images"));
// app.use(express.static("images"));
app.use(express.static("public"));
app.listen(8000, () => {
    console.log("Hello, World");
});

// Sample route
app.get("/products", (req, res) => {
    res.send("Product List");
});
