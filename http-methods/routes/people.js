const express = require("express");
const router = express.Router();

let { people } = require("../../data.js");

// GET
router.get("/", (req, res) => {
    res.status(200).json({ success: true, data: people });
});

// POST
router.post("/", (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" });
    }
    res.status(200).json({ success: true, person: name });
});
router.post("/postman", (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
});

// PUT
router.put("/:id", (req, res) => {
    let { id } = req.params;
    let { name } = req.body;

    let person = people.find((person) => person.id === +id);
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${id}` });
    }

    let newPerson = people.map((person) => {
        if (person.id === +id) {
            person.name = name;
        }
        return person;
    });

    res.status(200).json({ success: true, data: newPerson });
});

// DELETE
router.delete("/:id", (req, res) => {
    let person = people.find((person) => person.id === +req.params.id);
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` });
    }

    let newPeople = people.filter((person) => person.id !== +req.params.id);
    return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
