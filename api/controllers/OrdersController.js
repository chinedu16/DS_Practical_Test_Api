
/**
 * OrdersController
 *
 * @description :: Server-side logic for managing orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    allorder: function (req, res) {
        var token = req.query.token;

        jwtServices.verify(req.query.token, function (err, decoded) {
            if (err) {
                return res.json({error: err});
            }

            if (decoded) {
                Users.find({id: decoded.id})
                .populate('orders')
                .exec(function (err, hobbies) {
                    if (err) {
                        return res.json({ error: err });
                    }

                    var responseData = {
                        username: hobbies[0].username,
                        orders: hobbies[0].orders
                    }

                    return res.json(responseData);
                });
            }
        });
    },

    
    neworder: function (req, res) {

        
        var ordername = req.body.orders.order;
        var product = req.body.orders.overall;
        var token = req.query.token;

        jwtServices.verify(req.query.token, function (err, decoded) {
            if (err) {
                return res.json({error: err});
            }

            if (decoded) {
                Orders.create({
                    ordername: ordername,
                    product: product,
                    owner: decoded.id
                }).exec(function (err, hobby) {
                    if (err) {
                        return res.json("Orders did not create");
                    }
                    // if(hobby){
                    //     return res.json({orders: hobby})
                    // }

                    if (hobby !== undefined) {
                        Users.find({id: decoded.id})
                        .populate('orders')
                        .exec(function (err, hobbies) {
                            if (err) {
                                return res.json({error: err});
                            }

                         var options = {
                                emailAddress: hobbies[0].email,
                                firstName: hobbies[0].username
                            };

                        

                            SendMessageService.sendNewHobbyEmail(options, function (error) {
                                if (error) {
                                    console.log(error);
                                }

                                SendMessageService.sendNewHobbySms(hobbies[0].phone);
                                // console.log('email sent');
                            });

                            return res.json({hobbies: options});
                        });
                    }
                });
            }
        });
    },
};

