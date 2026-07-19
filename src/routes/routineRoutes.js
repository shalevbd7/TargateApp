import express from "express";
import {
  createRoutine,
  getUserRoutines,
  logRoutineCompletion,
} from "../controllers/routineController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// כל הבקשות לרוטינות יעברו קודם דרך protect
router.route("/").post(protect, createRoutine).get(protect, getUserRoutines);

// סימון V על רוטינה
router.post("/:id/log", protect, logRoutineCompletion);

export default router;
