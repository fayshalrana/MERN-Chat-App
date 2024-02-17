const jwt = require("jsonwebtoken");

const generateToken = (id)=>{
    return jwt.sign({id}, 'FayshalRana', {
        expiresIn: "30d"
    });
};

module.exports = generateToken;