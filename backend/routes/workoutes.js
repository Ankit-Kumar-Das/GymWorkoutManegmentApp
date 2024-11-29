const express = require("express");
const Workout = require("../models/workoutModels");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require("../controllers/workoutController");

const router = express.Router();

// GET all routes
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// POST a new workout
router.post("/:id", (req, res) => {
  res.json({ massage: " POSt a new workout" });
});

// DELETE a new workout
router.delete("/:id",deleteWorkout);

// UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
