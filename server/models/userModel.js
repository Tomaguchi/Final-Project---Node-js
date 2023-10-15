const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    externalId: { type: Number, required: true },
    fullName: { type: String, required: true },
    numOfActions: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const User = mongoose.model("user", userSchema, "users");

module.exports = User;
