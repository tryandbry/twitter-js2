const express = require('express');
const router = express.Router();


const tweetBank = require('../tweetBank');

router.get('/',function(request, response) {
  let tweets = tweetBank.list().reverse();
  response.render('index', { tweets: tweets,
                           showForm: true,
                       default_name: "" } );
});

router.get('/users/:name', function(request,response){
  var name = request.params.name;
  var tweets = tweetBank.find( {name: name} ).reverse();
  console.log("TWEETS FOUND:",tweets);
  response.render('index', { tweets: tweets,
                           showForm: true,
                      default_tweet: "Hello World!",
                       default_name: tweets[0].name } );
});

router.get('/tweets/:id', function(request,response){
  var id = request.params.id;

  //cast id to Number for find()
  var tweets = tweetBank.find( {id: +id} );
  response.render('index', { tweets: tweets } );
});

router.post('/tweets', function(request,response){
  // body.name and body.text are defined by the INPUT forms in the DOM
  var name = request.body.name;
  var text = request.body.text;

  tweetBank.add(name,text);
  response.redirect('/');
});

module.exports = router;
