/* eslint-disable import/no-dynamic-require */
const router = require('express').Router();
const path = require('path');

const { userList, getUserById } = require(path.join(__dirname, './routes/users'));
const { cardsList } = require(path.join(__dirname, './routes/cards'));
const wrongUrl = require(path.join(__dirname, './routes/wrongUrl'));

router.get('/users', userList);
router.get('/users/:id', getUserById);
router.get('/cards', cardsList);
router.get('/:value', wrongUrl);

module.exports = router;
