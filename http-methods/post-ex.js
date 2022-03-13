const express = require("express");
const app = express();
let { people } = require("../data.js");

// static assets
app.use(express.static("./http-methods/public"));
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
    let { name } = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }

    res.status(401).send("Please provide credentials..");
});

app.listen(3000, () => {
    console.log("server is listening on port 3000");
});
