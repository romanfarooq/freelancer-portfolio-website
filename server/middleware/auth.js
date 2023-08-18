import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

function middleware(req, res, next) {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.user = User.findById(decodedToken.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
}

export default middleware;
