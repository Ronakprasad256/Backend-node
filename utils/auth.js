const jwt = require("jsonwebtoken");

    const generatetoken = (payload) => {
    return jwt.sign(payload, process.env.API_KEY, { expiresIN: 60 });
};
    
module.exports = {
    generatetoken,
};