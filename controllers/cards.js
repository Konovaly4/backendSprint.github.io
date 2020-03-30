const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.status(200).send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'error find card' }));
};

module.exports.addCard = (req, res) => {
  const { name, link } = req.body;
  const ownerId = req.user._id;
  Card.create({ name, link, owner: ownerId })
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error creating card' }));
};

module.exports.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error deleting card' }));
};
