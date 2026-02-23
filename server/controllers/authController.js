import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: `All the fields are required` });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: `User registered successfully` });
  } catch (error) {
    res.status(500).json({ error: `Error registering user` });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: `Invalid username or password` });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status({ token });
  } catch (error) {
    res.status(500).json({ error: `Error logging in` });
  }
};
