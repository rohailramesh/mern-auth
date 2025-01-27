import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
// import { connectDB } from "./db/connectDB.js";
// import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve(); //this is for production later on
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // allow for parsing of incoming requests (req.body)
app.use(cookieParser()); //allow for parsing incoming cookies

// app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
} //configuring static files when deplying
app.listen(PORT, () => {
  // connectDB();
  console.log(`Server running on port ${PORT}`);
});
