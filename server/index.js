import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // VERY IMPORTANT

/* ROUTES */
app.use("/api/jobs", jobRoutes);

/* DB CONNECT */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
