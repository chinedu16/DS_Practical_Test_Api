/**
 * OrdersController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require('jsonwebtoken')
module.exports = {
    createOrders: function(req, res){

        var newOrder = {
            ordername: req.body.order,
            product: req.body.overall
        }

        Orders.create(newOrder).exec(function (err, user) {
            if (err) {
              return res.json(err.status, {err: err});
            }
            if (user) {
              res.json(200, {user: user});
            }
    });
    }
};

