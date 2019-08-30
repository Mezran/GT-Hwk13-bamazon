const db = require('../models');

module.exports = function(app){

  app.get('/api/all', function(req, res){
    db.Product.findAll({})
    .then(function(results) {
      res.json(results);
    });
  });

app.post('/api/update', function(req, res) {
  db.Product.findAll({})
  .then(function(results) {
    res.json(results);
  });
})


app.post('/api/placeOrder', function(req, res) {
  db.Product.findAll({
    where: {
      id: req.body.idToSearch
    }
  })
  .then(function(results) {
    const a = results[0].stockQuantity;
    const b = parseInt(req.body.quantity);
    const reduceBy = a - b;
    if(results[0].stockQuantity < req.body.quantity) {
      res.json({message:"Ordering too many"})
    } else {
      db.Product.update({
        stockQuantity: reduceBy
      }, {
        where: {
          id:results[0].id
        }
      }

    ) // end update
      res.json({message:"Order complete!"})
    }
  })
})

// app.put('/api/update', function(req, res) {
//   db.Product.update({
//     stockQuantity:req.body.results[0] - req.body.quantity
//   }
//
// ).then(function(results){
//   res.json({message:"worked"})
// })

// })



} // end module.exports
