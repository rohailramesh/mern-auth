import jwt from "jsonwebtoken";
// in the verifyToken we will get the token from the cookie and verify it against the secret and if it is valid we will get the userId and then we will set the userId in the req object. finally we will call the next middleware to continue the request
export const verifyToken = async (req, res, next) => {
  const token = req.cookies.token; //this is what we named the token in the generateTokenAndSetCookie function
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error verifying token", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
