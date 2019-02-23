var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HW 1' });
});

/* Homework 1 GET and POST */
/* GET method that returns a fixed string */
router.get('/hw1', function(req, res, next) {
  res.json({string: 'Hey now'});
});


/* POST method */
router.post('/hw1', function (req, res, next) {
  res.json({body: req.body});
});

module.exports = router;
