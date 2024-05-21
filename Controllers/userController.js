// controllers/userController.js

const userService = require('../services/userService');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    //Validate parameters
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Please provide username, email, and password' });
    }
    // check if user already exist
    const lowerEmail = email.toLowerCase();
    const oldUser = await userService.alreadyExist(lowerEmail);
    console.log("null",oldUser);
    console.log(process.env.JWT_SECRET)

    if (oldUser) {
      return res.status(400).json({ error: 'User Already Exist. Please Login' });
    }else{
      const user = await userService.registerUser(username, lowerEmail, password);
      const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '5h' });
      res.status(201).json({ message: 'User registered successfully', token });
    }
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }
    const token = await userService.loginUser(email, password);
    res.json({ token });
  } catch (error) {
    next(error);
  }
};
