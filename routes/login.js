var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login.ejs', { title: 'Login' });
});

module.exports = router;