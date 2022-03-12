const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// req => middleware => res

// manual middleware VS app.use
app.get(["/", "/home"], logger, (req, res) => {
    res.send("HOME");
});

// app.use("/api", logger); -- only on /api/..
app.use([logger, authorize]);
app.get("/about", (req, res) => {
    res.send("ABOUT");
});
app.get("/api/products", (req, res) => {
    res.send("PRODUCTS");
});
app.get("/api/items", (req, res) => {
    res.send("ITEMS");
});

app.listen(5000, () => console.log("server is listening on port 5000"));
