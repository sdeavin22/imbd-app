import mongoose from "mongoose";

const favSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateReleased: {
    type: Date,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    profilePicture: {
      type: String,
      required: true,
    },
    favs: {
      type: [favSchema],
      default: [],
    },
  },
  { timestamps: true }
);

// If model exists, use it, else create model based off userSchema then export user
const User = mongoose.User || mongoose.model("User", userSchema);
export default User;
