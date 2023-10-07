const get = (req, res) => {
  res.status(200);
  res.send('Hello world');
};

const health = (req, res) => {
  res.status(200);
  res.send('Server is healthy!');
};

module.exports = {
  get,
  health,
};
