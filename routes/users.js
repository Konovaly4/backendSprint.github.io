/* eslint-disable quotes */
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const users = require(path.join(__dirname, '../data/users.json'));

const userList = (req, res) => {
  res.send(users);
};

const getUserById = (req, res) => {
  // eslint-disable-next-line arrow-body-style
  const user = users.find((elem) => {
    // eslint-disable-next-line no-underscore-dangle
    return elem._id === req.params.id;
  });
  if (!user) {
    // eslint-disable-next-line quote-props
    res.status(404).send({ "message": "Нет пользователя с таким id" });
  }
  res.send(user);
};

module.exports = { userList, getUserById };
