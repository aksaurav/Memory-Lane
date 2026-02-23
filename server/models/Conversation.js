import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  personId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `Person`,
    required: true,
  },
  topics: [String],
  summary: {
    type: String,
    required: true,
  },
  rawText: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Conversation", conversationSchema);
