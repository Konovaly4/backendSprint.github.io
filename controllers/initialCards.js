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