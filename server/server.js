const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function(request, response){
  response.json({ message: "Hello World"});
})

// METHOD: GET
// ROUTE: home route ('/')

app.listen(3000, function(){
    console.log('App running on port 3000');
})

// PORT: 3000