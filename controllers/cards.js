const Card = require('../models/card');
const NotFoundErr = require('../errors/notFoundErr');
const UnauthorizedErr = require('../errors/unauthorizedErr');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .populate('owner')
    .then((cards) => {
      if (!cards) {
        throw new NotFoundErr('there is no cards');
      }
      res.status(200).send({ data: cards });
    })
    .catch(next);
};

module.exports.addCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports.checkCardOwner = (req, res, next) => {
  Card.findById(req.params.cardId)
    .populate('owner')
    .then((card) => {
      if (!card) {
        throw new NotFoundErr('card to remove not found');
      }
      if (card.owner.id !== req.user._id) {
        throw new UnauthorizedErr('you cat not remove this card');
      }
      next();
    })
    .catch(next);
};

module.exports.removeCard = (req, res, next) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundErr('card to like is not found');
      }
      res.status(200).send({ data: card });
    })
    .catch(next);
};

module.exports.unlikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundErr('card to unlike is not found');
      }
      res.status(200).send({ data: card });
    })
    .catch(next);
};
