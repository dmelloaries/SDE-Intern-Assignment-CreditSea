import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/connection.js";
import creditReportRoutes from "./routes/ReportRoutes.js";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
if (!fs.existsSync("uploads/")) {
  fs.mkdirSync("uploads/");
}

app.get("/", async (req, res) => {
  res.send("Server is Alive");
});

// Routes
app.use("/api", creditReportRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
