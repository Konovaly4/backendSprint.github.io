/* eslint-disable import/no-dynamic-require */
const router = require('express').Router();
const { userList, getUserById } = require('./routes/users');
const { cardsList } = require('./routes/cards');
const wrongUrl = require('./routes/wrongUrl');

router.get('/users', userList);
router.get('/users/:id', getUserById);
router.get('/cards', cardsList);
router.all('/:value', wrongUrl);

module.exports = router;
