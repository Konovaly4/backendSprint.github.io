const Card = require('../models/card');

module.exports.getCards = (req, res) => {
  Card.find({})
    .populate('owner')
    .then((cards) => {
      if (!cards) {
        res.status(404).send({ message: 'there is no cards' });
        return;
      }
      res.status(200).send({ data: cards });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.addCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.removeCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'card to remove is not found' });
        return;
      }
      res.status(200).send({ data: card });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.likeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'card to like is not found' });
        return;
      }
      res.status(200).send({ data: card });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.unlikeCard = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'card to unlike is not found' });
        return;
      }
      res.status(200).send({ data: card });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
