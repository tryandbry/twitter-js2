const express = require('express');
const router = express.Router();


const tweetBank = require('../tweetBank');

router.get('/',function(request, response, next) {
  let tweets = tweetBank.list();
  response.render('index', { tweets: tweets } );
});

module.exports = router;
