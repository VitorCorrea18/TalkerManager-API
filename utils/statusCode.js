// STATUS CODE

const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_UNAUTHORIZED = 401;
const HTTP_STATUS_CREATED = 201;

// ERROR MESSAGES

const TALKER_NOT_FOUND_MESSAGE = { message: 'Pessoa palestrante não encontrada' };
const REQUIRED_EMAIL_MESSAGE = { message: 'O campo "email" é obrigatório' };
const INVALID_EMAIL_MESSAGE = { message: 'O "email" deve ter o formato "email@email.com"' };
const REQUIRED_PWD_MESSAGE = { message: 'O campo "password" é obrigatório' };
const INVALID_PWD_MESSAGE = { message: 'O "password" deve ter pelo menos 6 caracteres' };
const TOKEN_NOT_FOUND_MESSAGE = { message: 'Token não encontrado' };
const INVALID_TOKEN_MESSAGE = { message: 'Token inválido' };
const NAME_REQUIRED_MESSAGE = { message: 'O campo "name" é obrigatório' };
const NAME_MIN_SIZE_MESSAGE = { message: 'O "name" deve ter pelo menos 3 caracteres' };
const AGE_REQUIRED_MESSAGE = { message: 'O campo "age" é obrigatório' };
const MIN_AGE_MESSAGE = { message: 'A pessoa palestrante deve ser maior de idade' };
const DATE_FORMAT_MESSAGE = { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
const RATE_MUST_BE_INT_MESSAGE = { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
const TALK_KEYS_REQUIRED_MESSAGE = {
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios'
};

module.exports = {
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_CREATED,
  TALKER_NOT_FOUND_MESSAGE,
  REQUIRED_EMAIL_MESSAGE,
  REQUIRED_PWD_MESSAGE,
  INVALID_PWD_MESSAGE,
  INVALID_EMAIL_MESSAGE,
  TOKEN_NOT_FOUND_MESSAGE,
  INVALID_TOKEN_MESSAGE,
  NAME_REQUIRED_MESSAGE,
  NAME_MIN_SIZE_MESSAGE,
  AGE_REQUIRED_MESSAGE,
  MIN_AGE_MESSAGE,
  DATE_FORMAT_MESSAGE,
  RATE_MUST_BE_INT_MESSAGE,
  TALK_KEYS_REQUIRED_MESSAGE,
};
