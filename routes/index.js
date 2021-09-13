const express = require('express');
const router = express.Router();
const foundation = require('./../public/startupdata/foundation');
const discovery = require('./../public/startupdata/discovery');
const delivery = require('./../public/startupdata/delivery');
router.get('/', function(req, res,) {
  res.render('index', { title: 'My startup progress', foundation, discovery, delivery });
});

module.exports = router;
