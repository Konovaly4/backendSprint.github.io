const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const userList = (req, res) => {
  const users = path.join(__dirname, '../data/users.json');
  const reader = fs.createReadStream(users, { encoding: 'utf8' });
  res.writeHead(200, {
    'content-type': 'appplcation/json',
  });
  reader.pipe(res);
};

const getUserById = (req, res) => {
  const users = path.join(__dirname, '../data/users.json');
  fsPromises.readFile(users, { encoding: 'utf8' })
    .then((data) => {
      // eslint-disable-next-line no-underscore-dangle
      const user = JSON.parse(data).find((elem) => elem._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
        return;
      }
      res.status(200).send(user);
    });
};


module.exports = { userList, getUserById };
