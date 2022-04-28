const { readFile } = require('../utils/readFile');
const {
  TALKER_NOT_FOUND_MESSAGE,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_BAD_REQUEST,
  TOKEN_NOT_FOUND_MESSAGE,
  INVALID_TOKEN_MESSAGE,
  NAME_REQUIRED_MESSAGE,
  NAME_MIN_SIZE_MESSAGE,
  AGE_REQUIRED_MESSAGE,
  MIN_AGE_MESSAGE,
  DATE_FORMAT_MESSAGE,
  RATE_MUST_BE_INT_MESSAGE,
  TALK_KEYS_REQUIRED_MESSAGE,
} = require('../utils/statusCode');

const getTalkers = async (__req, res) => {
  const talkersList = await readFile();

  if (!talkersList) {
    return res.status(HTTP_STATUS_OK).send([]);
  }
  return res.status(HTTP_STATUS_OK).send(talkersList);
};

const getTalkerById = async (req, res) => {
  const talkersList = await readFile();
  const id = Number(Object.values(req.params));
  const searchedTalker = talkersList.find((talker) => talker.id === id);

  if (!searchedTalker) {
    return res.status(HTTP_STATUS_NOT_FOUND).send(TALKER_NOT_FOUND_MESSAGE);
  }
  return res.status(HTTP_STATUS_OK).send(searchedTalker);
  // console.log(searchedTalker);
};

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const letters = /[a-zA-Z]/;
  const numbers = /[1-9]/;
  const minTokenSize = 16;

  if (!authorization) {
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(TOKEN_NOT_FOUND_MESSAGE);
  }

  if (authorization.length !== 16 ||
    !letters.test(authorization) ||
    !numbers.test(authorization)) {
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(INVALID_TOKEN_MESSAGE);
  }
  next();
};

const addTalker = (req, res) => {
  const { name, age, talk } = req.body;
  console.log(req.body);

};


module.exports = {
  getTalkers,
  getTalkerById,
  authenticateToken,
  addTalker,
};
