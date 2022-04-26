const fs = require('fs');
const path = require('path');

const talkerFilePath = path.join(__dirname, '..', 'talker.json');

const readFile = () => {
  const fileContent = fs.readFileSync(talkerFilePath, 'utf-8');
  const data = JSON.parse(fileContent);
  return data;
};

module.exports = {
  readFile,
};
