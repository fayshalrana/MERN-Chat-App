const asyncHandler = require("express-async-handler");
const User = require("../Models/UserModel");
const generateToken = require("../config/generateToken");

// User registration function
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  // check all input fields ar filled
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  // check if user already exists in our database
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // otherWays we will create a new user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  // if user is created successfully
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      pic: user?.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create new user");
  }
});

// User login function

const authUser = asyncHandler(async (req, res) => {
  // take info form frontend
  const { email, password } = req.body;

//   query in database if user match or not 
  const user = await User.findOne({ email });
  if(user && (await user.matchPassword(password))){
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        pic: user?.pic,
        token: generateToken(user._id),
      });
  } 
});

//all user 
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search ? {
    $or: [
      { name: { $regex: req.query.search, $options: "i" } },
      { email: { $regex: req.query.search, $options: "i" } },
    ]
  }
  :{}
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
  console.log(users);
})


module.exports = { registerUser, authUser, allUsers };
