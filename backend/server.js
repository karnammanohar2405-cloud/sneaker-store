import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
dotenv.config();

connectDB();

const app = express();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sneaker-store-woad-two.vercel.app"
    ],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("SneakerHub Backend Running");
});

// Auth Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});