module.exports = {
    Department,
    Role
}

function Department(req, res, next) {
    if (req.decodedJWT.department && req.decodedJWT.department.includes('Sales')) {
        next();
    } else {
        res.status(403).json({message:`Sorry that's not allowed`})
    }
}

function Role(req, res, next) {
    if (req.decodedJWT.role && req.decodedJWT.role.includes('Manager')) {
        next();
    } else {
        res.status(403).json({message:`Sorry that's not allowed`})
    }
}