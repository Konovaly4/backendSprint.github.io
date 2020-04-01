const path = require('path');
const fs = require('fs');

const cardsList = (req, res) => {
  const cards = path.join(__dirname, '../data/cards.json');
  const reader = fs.createReadStream(cards, { encoding: 'utf8' });
  res.writeHead(200, {
    'content-type': 'appplcation/json',
  });
  reader.pipe(res);
};

module.exports = { cardsList };
