/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require("bcrypt")
module.exports = {
  
  attributes: {

      username: {
        type: "string",
        required: true,
        unique: true
      },
      
      name: {
        type: "string",
      },

      email: {
        type: "string",
      },

      phone: {
        type: "string",
      },

      password:{
      type: "string",
      minLength: 6,
      protected: true,
      required: true,
      unique: true,
      columnName: "encryptedPassword"
    },

    //add reference to orders
    orders:{
      collection: 'orders',
      via: 'owner'
    }
  },
  
  customToJSON: function() {
    return _.omit(this, ['password', 'ssn'])
  },

  beforeCreate: function(users, cb){
    bcrypt.hash(users.password, 10, function (err, hash) {
      if (err) return cb(err);
      users.password = hash;
      cb();
    });
  }
};
