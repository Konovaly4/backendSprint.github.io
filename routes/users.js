const path = require('path');

const users = require(path.join(__dirname, '../data/users.json'));

/*const doesUserExist = (req, res, next) => {
  if(!users[req.params._id]) {
    res.send({"message": "Нет пользователя с таким id"});
    return;
  };
  next();
}*/

const userList = (req, res) => {
  res.send(users);
};

const getUserById = (req, res) => {
  const user = users.find((elem) => {
    return elem._id === req.params.id;
  });
  res.send(user);
};

module.exports = { userList, getUserById };
