const { readFile } = require('../utils/readFile');
const { writeFile } = require('../utils/writeFile');
const {
  TALKER_NOT_FOUND_MESSAGE,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_CREATED,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_NO_CONTENT,
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

const MIN_NAME_LENGTH = 3;
const MIN_TOKEN_LENGTH = 16;
const MIN_AGE = 18;

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
};

const authenticateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const letters = /[a-zA-Z]/;
  const numbers = /[1-9]/;

  if (!authorization) {
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(TOKEN_NOT_FOUND_MESSAGE);
  }

  if (authorization.length !== MIN_TOKEN_LENGTH
    || !letters.test(authorization)
    || !numbers.test(authorization)) {
    return res.status(HTTP_STATUS_UNAUTHORIZED).json(INVALID_TOKEN_MESSAGE);
  }
  next();
};

const verifyName = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(HTTP_STATUS_BAD_REQUEST).json(NAME_REQUIRED_MESSAGE);

  if (name.length < MIN_NAME_LENGTH) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(NAME_MIN_SIZE_MESSAGE);
  }
  next();
};

const verifyAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) return res.status(HTTP_STATUS_BAD_REQUEST).json(AGE_REQUIRED_MESSAGE);

  if (age < MIN_AGE) return res.status(HTTP_STATUS_BAD_REQUEST).json(MIN_AGE_MESSAGE);

  next();
};

const verifyTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    // !talk.rate não funciona pois se o valor for 0 ele entende como false

    return res.status(HTTP_STATUS_BAD_REQUEST).json(TALK_KEYS_REQUIRED_MESSAGE);
  }
  next();
};

const verifyTalkKeys = (req, res, next) => {
  const { talk } = req.body;
  const testString = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (!testString.test(talk.watchedAt)) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(DATE_FORMAT_MESSAGE);
  }

  if (Number(talk.rate) < 1 || Number(talk.rate > 5)) {
    return res.status(HTTP_STATUS_BAD_REQUEST).json(RATE_MUST_BE_INT_MESSAGE);
  }

  next();
};

const addTalker = (req, res) => {
  const actualTalkers = readFile();
  const id = actualTalkers.length + 1;
  const newTalker = { id, ...req.body };
  actualTalkers.push(newTalker);

  writeFile(JSON.stringify(actualTalkers));
  return res.status(HTTP_STATUS_CREATED).json(newTalker);
};

const editTalker = (req, res) => {
  const searchId = Number(Object.values(req.params));
  const { name, age, talk } = req.body;
  const talkers = readFile();

  const updatedTalkers = talkers.map((talker) => {
    if (talker.id === searchId) {
      return {
        ...talker,
        name,
        age,
        talk,
      };
    } return talker;
  });
  const editedTalker = updatedTalkers.filter((talker) => talker.id === searchId);
  writeFile(JSON.stringify(updatedTalkers));
  return res.status(HTTP_STATUS_OK).json(editedTalker[0]);
};

const deleteTalker = (req, res) => {
  const idForDelete = Number(Object.values(req.params));
  const allTalkers = readFile();

  const postDeleteTalkers = allTalkers.filter((talker) => talker.id !== idForDelete);
  writeFile(JSON.stringify(postDeleteTalkers));
  console.log(postDeleteTalkers);
  return res.status(HTTP_STATUS_NO_CONTENT).end();
};

module.exports = {
  getTalkers,
  getTalkerById,
  authenticateToken,
  verifyName,
  verifyAge,
  verifyTalk,
  verifyTalkKeys,
  addTalker,
  editTalker,
  deleteTalker,
};
