/**
 * Products.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'mysqlServer',
  attributes: {

    products: {
      type: "string",
    },
    prizes: {
      type: "integer",
      
    },
    description: {
      type: "string",
    }

  }
};

