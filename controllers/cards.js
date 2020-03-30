const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => res.status(200).send({ data: cards }))
    .catch(() => res.status(500).send({ message: 'error find card' }));
};

module.exports.addCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error creating card' }));
};

module.exports.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error deleting card' }));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error set like to card' }));
};

module.exports.unlikeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(500).send({ message: 'error remove like from card' }));
};
