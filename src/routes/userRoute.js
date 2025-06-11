import express from "express";
const router = express.Router();
import db from "../db.js";

router.get("/", (req, res) => {
  const query = "SELECT * FROM users";

  try {
    const stmt = db.prepare(query);
    const users = stmt.all();
    delete users.Password;
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users." });
  }
});

export default router;
