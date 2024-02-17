const express = require("express");
const { registerUser, authUser, allUsers } = require("../Controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// make login register route 
router.route('/').post(registerUser).get(protect, allUsers)
router.route('/login').post(authUser)

module.exports = router;