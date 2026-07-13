import express from "express";
import {
  createGoalBase,
  generateAIPlan,
  saveApprovedBlocks,
  getUserGoals,
} from "../controllers/goalController.js";

const router = express.Router();
router.get("/", getUserGoals);

router.post("/", createGoalBase);

router.post("/generate-plan", generateAIPlan);

router.put("/:id/blocks", saveApprovedBlocks);

export default router;
