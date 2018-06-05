/**
 * ProcreateController
 *
 * @description :: Server-side logic for managing Procreates
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  
    createproduct: function (req, res) {
      
       
        var product = req.body.product;
        var prizes = req.body.prizes;
        var description = req.body.description;
        
            
        Products.create({
          products: product,
          prizes: prizes,
          description: description
        }).exec(function (err, user) {
                if (err) {
                  return res.json(err.status, {err: err});
                }
                if (user) {
                  res.json(200, {products: user});
                }
        });
      }
	
};

