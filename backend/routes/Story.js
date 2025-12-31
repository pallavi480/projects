import express from "express";
import Story from "../models/Story.js";

const router = express.Router();

// TEST ROUTE (VERY IMPORTANT)
router.get("/test", (req, res) => {
  res.send("Story route working ✅");
});

// MAIN API
router.get("/", async (req, res) => {
  try {
    const { mood, genre } = req.query;

    const stories = await Story.find({
      mood,
      genre
    });

    res.json(stories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
