const userModel = require("../model/userModel");

const get = () => {
    return userModel.find({}, { password: 0, __v: 0 });
};

const create = (data) => {
    const user = new userModel(data);
    return user.save();
};

const getByEmail = (email) => {
    return userModel.findOne({ email: email}, {email: 1, password: 1})
}

module.exports = {
    get,
    create,
};