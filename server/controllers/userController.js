import User from "../models/userModel.js";
import sendToken from "../utils/sendToken.js";
import { hash, genSalt, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export async function getMe(req, res) {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "You are not authorized" });
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find().select("-password");

    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function register(req, res) {
  try {
    const { email, password, firstName, lastName, phoneno } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneno,
    });

    await newUser.save();

    sendToken(newUser, 201, res);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function logout(req, res) {
  try {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };

    res
      .status(200)
      .cookie("token", null, options)
      .json({ message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
