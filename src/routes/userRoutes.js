import express from "express";
import {
  registerUser,
  loginUser,
  updateBehavioralProfile,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// הראוטים של הפרופיל מוגנים!
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateBehavioralProfile);

export default router;
