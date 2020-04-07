const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.body;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'authorization required' });
  }
  const token = authorization.replace('bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'thereisthekey');
  } catch (err) {
    return res.status(401).send({ message: 'authorization required' });
  }
  req.user = payload;
  next();
};
