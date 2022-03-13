const express = require("express");
const app = express();
let { people } = require("../data.js");

// static assets
app.use(express.static("./http-methods/public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" });
    }
    res.status(200).json({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

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
