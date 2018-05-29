/**
 * OrdersController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require('jsonwebtoken')
module.exports = {

    getproduct: function (req, res) {   
        Products.find().exec(function (err, products) {
                if (err) {
                  return res.json(err.status, {err: err});
                }
                if (products) { 
                  res.json(200, {products: products});
                }
        });
      },
      
    
     
};

