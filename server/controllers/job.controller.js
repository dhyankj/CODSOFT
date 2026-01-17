import Job from "../models/Job.js";

// CREATE JOB (Employer)
export const createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL JOBS + SEARCH
export const getJobs = async (req, res) => {
  try {
    const { keyword, location } = req.query;

    let query = {};

    if (keyword) {
      query.title = { $regex: keyword, $options: "i" };
    }

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
