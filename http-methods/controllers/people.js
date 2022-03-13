let { people } = require("../../data.js");

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" });
    }
    res.status(200).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
    let { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: "please provide name value" });
    }
    res.status(201).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
    let person = people.find((person) => person.id === +req.params.id);
    if (!person) {
        return res.status(404).json({ success: false, msg: `no person with id ${req.params.id}` });
    }

    let newPeople = people.filter((person) => person.id !== +req.params.id);
    return res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
};
