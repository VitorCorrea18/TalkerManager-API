const fs = require('fs');
const path = require('path');

const talkerFilePath = path.join(__dirname, '..', 'talker.json');

const writeFile = async (data) => {
  fs.writeFile(talkerFilePath, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('File written successfully\n');
      console.log('The written has the following contents:');
      console.log(fs.readFileSync(talkerFilePath, 'utf8'));
    }
  });
};

module.exports = {
  writeFile,
};
