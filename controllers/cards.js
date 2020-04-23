const Card = require('../models/card');
const NotFoundErr = require('../errors/notFoundErr');
const ForbiddenErr = require('../errors/forbiddenErr');

module.exports.getCards = (req, res, next) => {
  Card.find({}).orFail(new NotFoundErr('there is no cards'))
    .populate('owner')
    .then((cards) => res.status(200).send({ data: cards }))
    .catch(next);
};

module.exports.addCard = (req, res, next) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports.checkCardOwner = (req, res, next) => {
  Card.findById(req.params.cardId).orFail(new NotFoundErr('card to remove not found'))
    .populate('owner')
    .then((card) => {
      if (card.owner.id !== req.user._id) {
        throw new ForbiddenErr('you cat not remove this card');
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
    { new: true }).orFail(new NotFoundErr('card to like is not found'))
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports.unlikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }).orFail(new NotFoundErr('card to unlike is not found'))
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};
