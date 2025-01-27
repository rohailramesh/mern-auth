//we will use jwt to generate token
import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (req, userId) => {
  //first generate token using jwt and sign the userId with secret
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  //second set the token as a cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
  return token; //this token will be used when verifying the token.
};
