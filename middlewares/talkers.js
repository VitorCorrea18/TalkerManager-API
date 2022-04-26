const { readFile } = require('../utils/readFile');
const { TALKER_NOT_FOUND_MESSAGE, NOT_FOUND, STATUS_OK } = require('../utils/statusCode');

const getTalkers = async (__req, res) => {
  const talkersList = await readFile();

  if (!talkersList) {
    return res.status(STATUS_OK).send([]);
  }
  return res.status(STATUS_OK).send(talkersList);
};

const getTalkerById = async (req, res) => {
  talkersList = await readFile();
  const id = Number(Object.values(req.params));
  const searchedTalker = talkersList.find((talker) => talker.id === id);

  if (!searchedTalker) {
    return res.status(NOT_FOUND).send(TALKER_NOT_FOUND_MESSAGE);
  }
  return res.status(STATUS_OK).send(searchedTalker);
  // console.log(searchedTalker);
}

module.exports = {
  getTalkers,
  getTalkerById,
};
