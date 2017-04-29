const express = require('express');
const app = express();

app.get('/',function(request,response){
  console.log("Welcome!\n");

  response.send("Welcome!");
});

app.listen(3000);

