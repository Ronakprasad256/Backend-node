const jwt = require("jsonwebtoken");

    const generatetoken = (payload) => {
    return jwt.sign(payload, process.env.API_KEY, {expiresIn: 60 });
};
    
module.exports = {
    generatetoken,
};