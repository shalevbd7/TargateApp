import mongoose from "mongoose";

const calendarEventSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: { type: String, required: true },

    // זמנים לתצוגה בלוז
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },

    // מאיפה האירוע הזה הגיע?
    sourceType: {
      type: String,
      enum: ["routine", "goal_block", "external_google"],
      required: true,
    },

    // מזהה מקשר: אם זה 'routine' יהיה פה את ה-ID של הרוטינה
    // אם זה 'goal_block' יהיה פה את ה-ID של הבלוק מתוך היעד
    referenceId: { type: mongoose.Schema.Types.ObjectId },

    // אם sourceType הוא 'external_google', נשמור את ה-ID המקורי מגוגל כדי שלא ניצור כפילויות
    googleEventId: { type: String },

    isCompleted: { type: Boolean, default: false }, // כשהמשתמש מסמן V ביומן או דרך הוואטסאפ
  },
  { timestamps: true },
);

export default mongoose.model("CalendarEvent", calendarEventSchema);
