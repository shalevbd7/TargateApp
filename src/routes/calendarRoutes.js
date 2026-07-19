import express from "express";
import {
  getCalendarEvents,
  syncGoogleCalendar,
} from "../controllers/calendarController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getCalendarEvents);
router.post("/sync", protect, syncGoogleCalendar);

export default router;
