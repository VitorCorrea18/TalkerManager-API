const crypto = require('crypto');
const { STATUS_OK } = require('../utils/statusCode');

const login = (req, res) => {
  // const data = req.headers;

  // Metodo crype.randomBytes retirado da documentação oficial do Node.js: 
  // https://nodejs.org/api/crypto.html#cryptorandombytessize-callback 
  const token = { token: crypto.randomBytes(8).toString('hex') };
  return res.status(STATUS_OK).send(token);
};

module.exports = {
  login,
};
