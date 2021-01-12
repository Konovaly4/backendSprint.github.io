/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../constants/config');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new Error('authorization faliture');
  }
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return res.status(401).send({ message: 'authorization required' });
  }
  req.user = payload;
  next();
};
