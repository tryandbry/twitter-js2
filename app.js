// modules
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

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


// routes
app.get('/',function(request,response){
  nunjucks.render('index.html',{ title:'An Example',
                                people:[ { name: 'Gandalf' },
                                         { name: 'Frodo' },
                                         { name: 'Hermione' } ]
                               },function(error, output){
  console.log(output);
  response.send(output);
});
});

app.listen(3000);

