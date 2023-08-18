import jwt from "jsonwebtoken";

function sendToken(user, statusCode, res) {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const { password, ...rest } = user._doc;

  res.status(statusCode).json({ user: rest, token });
}

export default sendToken;
