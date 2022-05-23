const { default: mongoose } = require("mongoose");
const { Author } = require("../models/author.models")

module.exports.testAPI = (req, res) => {
    res.json({
        message: "Backend Message"
    });
}

module.exports.allAuthors = (req, res) => {
    Author.find({})
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json(err))
}

module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id : req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id : req.params.id})
    .then(status => res.json(status))
    .catch(err => res.json(err))
}


