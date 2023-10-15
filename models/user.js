const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    password: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);