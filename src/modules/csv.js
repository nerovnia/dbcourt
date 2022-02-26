'use strict'
const fs = require("fs");
const readline = require('readline');
const db = require('../modules/db');

module.exports.convert_csv = (path) => {
  console.log('arr');
  let max_pull = 37;
  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    console: false
  });
  let arr = [];
  let str_count = 0;
  console.log(`Start: ${new Date().getMilliseconds()}`);
  rl.on('line', (input) => {
    if (str_count > 0) {
      arr.push(input.replaceAll('"','').split('\t'));
      if (str_count % max_pull === 0) {
        //console.log(arr.length);
        db.fill__db(arr);
        arr = [];
      }
    }
    str_count++;
  });
  rl.on('close', () => {
    if(arr.length > 0) {
      db.filldb(arr);
      console.log(`Total ${--str_count} read records.`);
    }
  });
}
