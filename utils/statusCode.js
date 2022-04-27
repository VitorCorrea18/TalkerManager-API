// STATUS CODE

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_BAD_REQUEST = 400;

// ERROR MESSAGES

const TALKER_NOT_FOUND_MESSAGE = { message: 'Pessoa palestrante não encontrada' };
const REQUIRED_EMAIL_MESSAGE = { message: 'O campo "email" é obrigatório' };
const INVALID_EMAIL_MESSAGE = { message: 'O "email" deve ter o formato "email@email.com"' };
const REQUIRED_PWD_MESSAGE = { message: 'O campo "password" é obrigatório' };
const INVALID_PWD_MESSAGE = { message: 'O "password" deve ter pelo menos 6 caracteres' };

module.exports = {
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
  HTTP_STATUS_BAD_REQUEST,
  TALKER_NOT_FOUND_MESSAGE,
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_PWD_MESSAGE,
  INVALID_PWD_MESSAGE,
  INVALID_EMAIL_MESSAGE,
};
