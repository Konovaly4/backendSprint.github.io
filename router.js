const router = require('express').Router();

const { userList, getUserById } = require('./routes/users');

router.get('/users', userList);
router.get('/users/:id', getUserById);

module.exports = router;
