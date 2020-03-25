const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('user')
    .then((cards) => res.status(200).send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'error find card' }));
};

module.exports.addCard = (req, res) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .populate('owner')
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error creating card' }));
};

module.exports.removeCard = (req, res) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.findByIdAndRemove({ name, link, owner })
    .populate('owner')
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error deleting card' }));
};
