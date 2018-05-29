/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var jwt = require('jsonwebtoken')


module.exports = {
      login: function (req, res) {
      
        var newUser = {
          username: req.body.username
        };
            
        Users.findOne(newUser).exec(function (err, user) {
                if (err) {
                  return res.json("Login Error");
                }
                if(!user){
                  return res.json("Login Failure");
                }
                if (user) {
                   return res.json(200, {user: user, token: jwt.sign({id: user.id}, 'secret' , {expiresIn:'1h'})});
                }
        });
      },
}
