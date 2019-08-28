const db = require('../models');

module.exports = function(app){

  app.get('/api/all', function(req, res){
    db.Product.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });

} // end module.exports
