const router = require('express').Router();
const { getUsers, getUserById, addUser } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', addUser);

module.exports = router;
