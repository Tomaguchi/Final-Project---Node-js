const User = require("../models/userModel");

const getUsers = () => {
  return User.find();
};

const findUser = async (params) => {
  return await User.findOne(params);
};

module.exports = { findUser, getUsers };
