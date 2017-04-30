// modules
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

//configure modules
nunjucks.configure('views',{noCache: true});
app.engine('html',nunjucks.render);
app.set('view engine','html');

// middleware
app.use(function(request,response,next){
  console.log(request.method + " " +
              request.path + " ");
  
  next(); 
});

app.use( bodyParser.urlencoded({extended: false}) );
app.use( bodyParser.json());

// routes
const routes = require('./routes');
app.use('/', routes);

// static content
app.use(express.static('public'));


app.listen(3000);

