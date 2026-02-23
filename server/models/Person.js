import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    faceEmbedding: {
      type: [Number],
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Person", personSchema);
