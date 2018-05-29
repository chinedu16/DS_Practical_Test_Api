/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jwt = require('jsonwebtoken')


module.exports = {
    
    signup: function (req, res) {
      
        var newUser = {
          username: req.body.username,
          password: req.body.password,
          name: req.body.password,
          email: req.body.password,
          phone: req.body.password
        };
            
        Users.create(newUser).exec(function (err, user) {
                if (err) {
                  return res.json(err.status, {err: err});
                }
                if (user) {
                  res.json(200, {user: user, token: jwt.sign({id: user.id}, 'secret' , {expiresIn:'1h'})});
                }
        });
      },
}
