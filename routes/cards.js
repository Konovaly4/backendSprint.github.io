const router = require('express').Router();
const { getCards, addCard, removeCard } = require('../controllers/cards');

router.get('/', getCards);
router.post('/', addCard);
router.delete('/:_id', removeCard);

module.exports = router;
