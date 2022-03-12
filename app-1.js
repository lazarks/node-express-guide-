const express = require("express");
const app = express();

app.get(["/", "/home"], (req, res) => {
    console.log("user hit the resource [home]");
    res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
    console.log("user hit the resource [about]");
    res.status(200).send("About Page");
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>resource not found</h1>");
});

// srv 3000
app.listen(3000, () => {
    console.log("server is listening on port 3000");
});

// get | post | put | delete | all | use | listen |
