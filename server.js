const express = require('express');
const path = require('path');


// create node server
const app = express();
const PORT = process.env.PORT || 8000;

//require models for synching
const db = require('./models');

// setup middleware
app.use(express.urlencoded({extended: true }));
app.use(express.json());
// allows all requests to anything in the public folder
app.use(express.static('public'));

// routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

// force:true
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("server listening on port " + PORT);
  });
});
