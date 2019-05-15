module.exports = {
    Department,
    Role
}

function Department(department) {
    return function(req, res, next) {
    if (req.decodedJWT.department && req.decodedJWT.department.includes(department)) {
        next();
    } else {
        res.status(403).json({message:`Sorry that's not allowed here`})
    }
}
}
    

function Role(role) {
    return function(req, res, next) {
    if (req.decodedJWT.role && req.decodedJWT.role.includes(role)) {
        next();
    } else {
        res.status(403).json({message:`Sorry that's not allowed`})
    }}
}