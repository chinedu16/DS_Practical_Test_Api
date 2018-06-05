/**
 * Orders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysqlServer',

  attributes: {
    ordername: {
      type: 'string',
    },
    overall:{
      type: 'array'
    },
    
    //add reference to user
    owner: {
      model: 'users'
    }

   
  }
};


