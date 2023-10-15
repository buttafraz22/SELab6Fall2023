const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/users/createUser", userController.createUser);
router.get("/users/getUser", userController.getUser);
router.post("/users/updateUser", userController.updateUser);
router.post("/users/deleteUser", userController.deleteUser);

module.exports = router;
