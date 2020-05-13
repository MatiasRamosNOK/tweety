const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:id', function (req, res) {
  let tweets = tweetBank.find({name: req.params.id});
  res.render( "index", { tweets: tweets } );
});

router.get('/tweets/:id', function (req, res) {
  let tweets = tweetBank.find({id: parseInt(req.params.id)});
  res.render( "index", { tweets: tweets } );
});

module.exports = router;