import mongoose from "mongoose";

const routineSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true }, // למשל: "להניח תפילין" או "לאכול 3000 קלוריות"
    frequency: {
      type: String,
      enum: ["daily", "weekly", "custom_days"],
      required: true,
    },
    preferredTime: { type: String }, // זמן אידיאלי להתראה ראשונה ביום (למשל "07:30")

    // מעקב ביצועים ורצפים
    currentStreak: { type: Number, default: 0 }, // כמה ימים/שבועות רצופים
    milestonesReached: { type: [String], default: [] }, // ציוני דרך שהושגו: ['3_days', '1_week']

    // ניהול תזכורות ווואטסאפ (מתאפס כל לילה על ידי השרת)
    lastCompletedDate: { type: Date }, // אם התאריך פה תואם להיום, הרוטינה בוצעה
    remindersSentToday: { type: Number, default: 0 }, // כמה פושים/הודעות כבר הקפצנו לו היום

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export default mongoose.model("Routine", routineSchema);
