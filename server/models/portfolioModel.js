import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  description: String,
  images: [String],
  videos: [String],
  skills: [String],
  links: [
    {
      title: String,
      url: String,
    },
  ],
});

export default mongoose.model("Portfolio", portfolioSchema);
