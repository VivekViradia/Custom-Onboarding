const User = require('../models/user.model');

export const createOrUpdateUser = async (req, res) => {
  try {
    const { email, password, ...rest } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      user.set({ ...rest });
      await user.save();
      return res.status(200).json(user);
    }

    const newUser = await User.create({ email, password, ...rest });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user' });
  }
};

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
