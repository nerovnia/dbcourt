const express = require('express');
const cfg = require('../cfg/cfg');
//var cfg = require('../cfg/cfg');
//var http = require('../modules/http');
var db = require('../modules/db');
var csv = require('../modules/csv');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(http.getFileSize('http://od.reyestr.court.gov.ua/files/43/f629e314bad9220392d28aaa4bcdeeed.rtf'));
  //db.filldb('db/edrsr.db', rec_arr);
  //csv.convert_csv(cfg.csv_path);
  db.fill__doc_size();
  res.render('index', { title: cfg.app_name });
});

module.exports = router;
