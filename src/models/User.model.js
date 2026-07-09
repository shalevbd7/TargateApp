import mongoose from "mongoose";

const behavioralProfileSchema = new mongoose.Schema(
  {
    physiology: { type: Object }, // למשל: נתוני פתיחה, בניית מסה, רמות אנרגיה
    scheduleGrid: { type: Object }, // עוגנים קבועים: שעת למידה זוגית בשני בערב, עבודה
    behavioralTraits: { type: Object }, // חסמים, סגנון למידה (ספרינטים או בלוקים ארוכים)
    currentLoad: { type: Object }, // עומס נוכחי בחיים כדי למנוע שחיקה
  },
  { _id: false },
); // אין צורך ב-ID נפרד לתת-מסמך הזה

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // יכול להיות ריק אם מתחברים דרך גוגל
    phone: { type: String }, // חובה כדי שהבוט יוכל לשלוח וואטסאפ

    // אינטגרציות
    googleCalendarConnected: { type: Boolean, default: false },
    googleTokens: { type: Object }, // שמירת טוקנים לקריאת האירועים מהיומן

    // תעודת זהות התנהגותית
    behavioralProfile: behavioralProfileSchema,
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
