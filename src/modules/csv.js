'use strict'
const fs = require("fs");
const readline = require('readline');

module.exports.convert_csv = (path) => {
  console.log('arr');
  let max_pull = 37;
  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    console: false
  });
  let arr = [];
  let str_count = 0;
  rl.on('line', (input) => {
    if (str_count > 0) {
      arr.push(input.split('\t'));
      if (str_count % max_pull === 0) {
        console.log(arr.length);
        arr = [];
      }
    }
    str_count++;
  });
  rl.on('close', () => {
    if(arr.length > 0) {
      console.log(arr.length);
    }
  });
}
