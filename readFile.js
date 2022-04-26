const fs = require('fs');

const talkerFilePath = './talker.json';

const readFile = () => {
  const fileContent = fs.readFileSync(talkerFilePath, 'utf-8');
  const data = JSON.parse(fileContent);
  return data;
};

module.exports = {
  readFile,
};
