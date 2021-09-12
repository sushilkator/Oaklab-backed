const express = require('express');
const router = express.Router();
const foundation = require('./../public/startupdata/foundation');
const discovery = require('./../public/startupdata/discovery');
const delivery = require('./../public/startupdata/delivery');

router.get('/', function (req, res) {
  res.render('index', { title: 'My startup progress', foundation, discovery, delivery });
});

router.put('/foundation', function (req, res) {
  const data = req.body;
  if (!foundation[data.key]) {
    res.status(400).send({ 'status': 200, 'message': 'Bad request !' });
  } else {
    foundation[data.key].completed = data.value;
    res.status(200).send({ 'status': 200, 'message': `${foundation[data.key].label} status updated` });
  }
});

router.put('/discovery', function (req, res) {
  const data = req.body;
  if (!discovery[data.key]) {
    res.status(400).send({ 'status': 200, 'message': 'Bad request !' });
  } else {
    discovery[data.key].completed = data.value;
    res.status(200).send({ 'status': 200, 'message': `${discovery[data.key].label} status updated` });
  }
});

router.put('/delivery', function (req, res) {
  const data = req.body;
  if (!delivery[data.key]) {
    res.status(400).send({ 'status': 200, 'message': 'Bad request !' });
  } else {
    delivery[data.key].completed = data.value;
    res.status(200).send({ 'status': 200, 'message': `${delivery[data.key].label} status updated` });
  }
});

module.exports = router;
