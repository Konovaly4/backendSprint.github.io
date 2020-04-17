const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards, addCard, checkCardOwner, removeCard, likeCard, unlikeCard,
} = require('../controllers/cards');

router.get('/', getCards);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().uri(),
  }),
}),
addCard);

router.delete('/:cardId', checkCardOwner, removeCard);

router.put('/:cardId/likes', likeCard);

router.delete('/:cardId/likes', unlikeCard);

module.exports = router;

// Для удаления и проставления лайка карточки я не использовал дополнительную
// валидацию, т.к. предварительно
// пользователь проходит авторизацию и получает свой же _id в тело запроса, который
// и использует при удалении/лайке/дизлайке карточки.
