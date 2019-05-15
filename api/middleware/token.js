module.exports = {
    generateToken
}

function generateToken(user) {
    const payload ={
      subject: user.id,
      username: user.username,
      roles: user.role,
    }
    const options ={
      expiresIn: '1d',
    }
    return jwt.sign(payload, secrets.jwtSecret, options);
  }