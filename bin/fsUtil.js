const fs = require('fs');
// 创建文件写入内容
const write = (file, data) => {
  console.log('file', file);
  fs.writeFile(file, data, function(err) {
    if (err) {
        return console.error(err);
    };
  });
};

module.exports = {
  write
};