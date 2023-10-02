const get = (req, res) => {
        res.status(200);
        res.send("Hello world");
        res.end();
}

const health = (req, res) => {
    res.status(200);
    res.send("Server is healthy!")
    res.end();
}

module.exports = {
    get,
    health,
};