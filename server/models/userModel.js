import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
  skills: [String],
  expertise: String,
  contact: {
    email: String,
    socialMedia: String,
  },
  availability: String,
  testimonials: [
    {
      clientName: String,
      feedback: String,
      rating: Number,
    },
  ],
});

export default mongoose.model("User", userSchema);
