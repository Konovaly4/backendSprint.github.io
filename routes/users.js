const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getUserById, updateUser, updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/:id', getUserById);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2),
  }),
}),
updateUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().uri(),
  }),
}),
updateAvatar);

module.exports = router;

// Для получения списка пользователей и пользователя по _id я не использовал дополнительную
// валидацию, т.к. предварительно пользователь проходит авторизацию,
// а в теле запроса ничего нет.
