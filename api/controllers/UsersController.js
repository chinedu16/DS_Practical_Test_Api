  /**
   * UsersController
   *
   * @description :: Server-side logic for managing users
   * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
   */

  var jwt = require('jsonwebtoken')


  module.exports = {
        login: function (req, res) {

        var username = req.body.username;
        var password = req.body.password;

              
        Users.findOne({username: username}).exec(function (err, user) {
          if (err) {
            return res.json({error: err});
          }
          if(!user){
            return res.json({error: err});
          }
          if (user) {
            return res.json({

              token: jwtServices.issue({id: user.id})
                    });
                  }
          });
        },
  }
