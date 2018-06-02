/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');


module.exports = {
    
    signup: function (req, res) {
      
        var newUser = {
          username: req.body.username,
          password: req.body.password,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone
        };
            
        Users.create(newUser).exec(function (err, newUser) {
                if (err) {
                  return res.json(err.status, {err: err});
                }
                if (newUser) {
                  return res.json({
                    token: jwtServices.issue({id: newUser.id})
                });
                }
        });
      },
}
