import express from "express";
// אלו הפונקציות שניצור בקונטרולר בהמשך
import {
  registerUser,
  loginUser,
  updateBehavioralProfile,
  getUserProfile,
} from "../controllers/userController.js";
// מידלוור שנוודא שהמשתמש מחובר לפני שהוא מעדכן נתונים
// import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// הרשמה והתחברות
router.post("/register", registerUser);
router.post("/login", loginUser);

// עדכון וקריאת "תעודת הזהות ההתנהגותית" (דורש התחברות)
// router.get('/profile', protect, getUserProfile);
// router.put('/profile', protect, updateBehavioralProfile);

export default router;
