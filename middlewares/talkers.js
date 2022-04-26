const { readFile } = require('../readFile.js');

const getTalkers = async (__req, res) => {
  const talkersList = await readFile();

  if (!talkersList) {
    return res.status(200).send([]);
  }
  return res.status(200).send(talkersList);
};

module.exports = {
  getTalkers,
};
