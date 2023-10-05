const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const tokens = authHeader.split(" ");
        const encodedStr = tokens[1];
        //Base64
        const decoded = atob(encodedStr);
        const cred = decoded.split(":");
        const username = cred[0];
        const password = cred[1];
        console.log(username, password);
        if (username === 'admin' && password === 'pass') {
            next();
        }
    } else {
        res.status(401)
        res.send("Unauthorized");
    }
};

module.exports = {
    authenticate,
};