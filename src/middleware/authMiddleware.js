import jwt from "jsonwebtoken";
import db from "../db.js";

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded?.id) {
      console.error("Invalid token payload:", decoded);
      return res.status(400).json({ message: "Invalid token payload" });
    }

    const user = db.prepare("SELECT * FROM users WHERE id = ?").get(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found in database" });
    }

    req.user_id = decoded.id;
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
