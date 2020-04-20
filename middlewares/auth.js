const jwt = require('jsonwebtoken');
const UnauthorizedErr = require('../errors/unauthorizedErr');

const { NODE_ENV, JWT_SECRET } = process.env;

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnauthorizedErr('authorization required');
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'test-key');
  } catch (err) {
    throw new UnauthorizedErr('authorization required');
  }
  req.user = payload;
  next();
};
