import mongoose from "mongoose";

// סכמה פנימית לכל צעד/בלוק שה-AI מייצר
const actionBlockSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: ["environment_design", "micro_step", "core_action"],
  }, // סיווג פסיכולוגי
  durationMinutes: { type: Number }, // הערכת זמן לביצוע (עוזר לשבץ ביומן)
  status: {
    type: String,
    enum: ["pending", "scheduled", "completed"],
    default: "pending",
  },
  linkedCalendarEventId: { type: mongoose.Schema.Types.ObjectId }, // קישור לאירוע ביומן אם כבר שובץ
});

const goalSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },
    category: { type: String },

    // שאלות ההכנה שהוזנו באשף
    successMetric: { type: String }, // "איך ניתן לאמוד? כמותי/איכותני"
    currentStatusDesc: { type: String }, // איפה אתה עומד כרגע

    deadline: { type: Date }, // יכול להיות Null אם זה יעד ללא תאריך יעד פקע

    // התוכנית שנוצרה ואושרה
    blocks: [actionBlockSchema],

    status: {
      type: String,
      enum: ["active", "paused", "completed"],
      default: "active",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Goal", goalSchema);
