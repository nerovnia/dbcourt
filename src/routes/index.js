var express = require('express');
var http = require('../modules/http');
var db = require('../modules/db');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(http.getFileSize('http://od.reyestr.court.gov.ua/files/43/f629e314bad9220392d28aaa4bcdeeed.rtf'));
  db.filldb('db/foobar.db');
  res.render('index', { title: 'DBCourt' });
});

module.exports = router;
