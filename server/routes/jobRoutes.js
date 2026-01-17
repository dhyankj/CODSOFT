import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

/* CREATE JOB */
router.post("/", async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* GET ALL JOBS */
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
