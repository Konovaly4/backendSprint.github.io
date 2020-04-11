const router = require('express').Router();
const {
  getCards, addCard, checkCardOwner, removeCard, likeCard, unlikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', addCard);
router.delete('/:cardId', checkCardOwner, removeCard);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', unlikeCard);

module.exports = router;
