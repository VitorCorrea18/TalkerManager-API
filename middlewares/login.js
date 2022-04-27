const crypto = require('crypto');
const {
  HTTP_STATUS_OK,
  HTTP_STATUS_BAD_REQUEST,
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_PWD_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  INVALID_PWD_MESSAGE,
} = require('../utils/statusCode');

const PWD_MIN_LENGTH = 6;

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(REQUIRED_EMAIL_MESSAGE);
  }

  if (!email.includes('@') || !email.includes('.com')) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(INVALID_EMAIL_MESSAGE);
  }
  next();
};

const validatePwd = (req, res, next) => {
  const pwd = req.body.password;

  if (!pwd) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(REQUIRED_PWD_MESSAGE);
  }

  if (pwd.length < PWD_MIN_LENGTH) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(INVALID_PWD_MESSAGE);
  }
  next();
};

const login = (__req, res) => {
  // Metodo crype.randomBytes retirado da documentação oficial do Node.js: 
  // https://nodejs.org/api/crypto.html#cryptorandombytessize-callback 
  const token = { token: crypto.randomBytes(8).toString('hex') };
  return res.status(HTTP_STATUS_OK).send(token);
};

module.exports = {
  login,
  validateEmail,
  validatePwd,
};
