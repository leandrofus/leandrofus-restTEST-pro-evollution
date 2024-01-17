var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.all('//', function(req, res, next) {
  console.log(req.headers)
  console.log(req.body )
  fs.appendFileSync('data/data.log',`${JSON.stringify(req.headers)},  \n ${JSON.stringify(req.body)} \r\n` , )
  res.render('layout')
});

module.exports = router;
