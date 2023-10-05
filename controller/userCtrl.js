const userRepo = require('../repos/userRepo');
const crypto = require('../utils/bcrypt');

const allUsers = async (req, res) => {
  try {
    const users = await userRepo.get();
    res.status(200);
    res.json(users);
  } catch (error) {
    logger.error(error);
    res.status(500);
    res.send('Internal Server error');
  }
};

const signup = async (req, res) => {
  try {
    const data = req.body;
    data.createdAt = new Date();
    data.password = await crypto.genHash(data.password);
    await userRepo.create(data);
    res.status(201);
    res.send();
  } catch (error) {
    if (error && error.message.indexOf('duplicate key') > -1) {
      res.status(400);
      res.send('Email Already Exists');
    } else {
      res.status(500);
      res.send('Internal Server error');
    }
  }
};

const signin = async (req, res) => {
  const data = req.body;
  const user = await userRepo.getByEmail(data.email);
  console.log("dbuser", user);
  if (!user) {
    res.status(401);
    res.send("Email or Password Wrong");
  } else {
    const verify = await crypto.compare(data.password, user.password);
    if (verify) {
      res.status(401);
      res.send("Email or Password Wrong")
    }
  }
}

module.exports = {
  allUsers,
  signup,
  signin,
};

// username & password
// find the user using its email in DB
// Unauthorized -> User Not Found
// db Password
// hash(pass) === dbpassword
// User Verified => successful signin
// 401 -> Unauthorized
