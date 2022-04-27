const { readFile } = require('../utils/readFile');
const {
  TALKER_NOT_FOUND_MESSAGE,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_OK,
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

module.exports = {
  getTalkers,
  getTalkerById,
};
