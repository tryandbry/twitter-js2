const express = require('express');
const router = express.Router();


const tweetBank = require('../tweetBank');

router.get('/',function(request, response) {
  let tweets = tweetBank.list();
  response.render('index', { tweets: tweets } );
});

router.get('/users/:name', function(request,response){
  var name = request.params.name;
  var tweets = tweetBank.find( {name: name} );
  response.render('index', { tweets: tweets } );
});

module.exports = router;
