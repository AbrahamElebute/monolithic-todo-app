import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import authRoutes from "./routes/authRoute.js";
import userRoutes from "./routes/userRoute.js";
import toDoRoutes from "./routes/todoRoute.js";
import authMiddleware from "./middleware/authMiddleWare.js";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/todos", authMiddleware, toDoRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
