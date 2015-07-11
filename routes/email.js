var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/email', function(req, res, next) {
  res.render('email', { title: 'Sign Up' });
});

module.exports = router;
