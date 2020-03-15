
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const cards = require(path.join(__dirname, '../data/cards.json'));

const cardsList = (req, res) => {
  res.send(cards);
};

module.exports = { cardsList };
