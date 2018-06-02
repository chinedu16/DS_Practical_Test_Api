module.exports = function (req, res, next) {
    
    if (req.query.token) {
        JwtService.verify(req.query.token, function (err, decoded) {
            if (err) {
                console.log(err);
            }
            if (decoded) {
                next();
            } else {
                res.json({error: 'invalid token'});
            }
        });
    } else {
        res.json({error: "please include a token"});
    }
}