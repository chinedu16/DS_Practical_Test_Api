/**
 * ProcreateController
 *
 * @description :: Server-side logic for managing Procreates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  
    createproduct: function (req, res) {
      
        var newUser = {
          product: req.body.product,
          prizes: req.body.prizes,
          description: req.body.description,
        };
            
        Products.create(newUser).exec(function (err, user) {
                if (err) {
                  return res.json(err.status, {err: err});
                }
                if (user) {
                  res.json(200, {products: user});
                }
        });
      }
	
};

