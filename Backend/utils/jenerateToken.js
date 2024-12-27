import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000, // changing to MS
    httpOnly: true, // Makes the cookie inaccessible to JavaScript
    sameSite: "strict", // Ensures the cookie is sent only from the same origin
    secure: process.env.NODE_ENV !== "development", // Ensures cookies are sent only over HTTPS in production
  });
};

export default generateTokenAndSetCookie;
