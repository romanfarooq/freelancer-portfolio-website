import jwt from "jsonwebtoken";

function sendToken(user, statusCode, res) {
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const { password, ...rest } = user._doc;

  const options = {
    expires: new Date(
      Date.now() +
        24 * 60 * 60 * 1000 * parseInt(process.env.JWT_COOKIE_EXPIRES)
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({ user: rest });
}

export default sendToken;
