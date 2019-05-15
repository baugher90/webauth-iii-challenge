module.exports = role => {
    return function(req, res, next) {
        if (req.decodedJWT.role && req.decodedJWT.role.includes(role)) {
            next();
        } else {
            res.status(403).json({message:`Sorry that's not allowed`})
        }
    }
}