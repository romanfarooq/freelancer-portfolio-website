import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

async function middleware(req, res, next) {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
}

export default middleware;
