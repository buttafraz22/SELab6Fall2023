const User = require("../models/user");
const crypto = require("crypto");

async function createUser(req, res) {
  try {
    const userName = req.body.userName;
    const password = req.body.password;

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");

    const user = new User({
      userName,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getUser(req, res) {
  try {
    const userId = req.body.id;

    const user = await User.findById({_id: userId});

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    const userId = req.body.id;

    const user = await User.findById({_id:userId});

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    user.userName = req.body.userName;
    user.password = crypto.createHash("sha256").update(req.body.password).digest("hex");

    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.body.id;

    const user = await User.findById({_id:userId});

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    await user.delete();

    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createUser, getUser, updateUser, deleteUser };
