import express from "express";

import Job from "../models/Job.js";

import {
  authMiddleware,
} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {

    const newJob = await Job.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(newJob);

  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {

    const jobs = await Job.find();

    res.json(jobs);

  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;