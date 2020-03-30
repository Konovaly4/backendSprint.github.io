const router = require('express').Router();
const {
  getCards, addCard, removeCard, likeCard, unlikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', addCard);
router.delete('/:_id', removeCard);
router.put('/:_id/likes', likeCard);
router.delete('/:_id/likes', unlikeCard);

module.exports = router;
