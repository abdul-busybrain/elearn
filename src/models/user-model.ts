import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },

    profilePic: {
      type: String,
      required: false,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: true,
    },

    isActive: {
      type: Boolean,
      reuqied: true,
      default: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models["users"]) {
  delete mongoose.models["users"];
}

const UserModel = mongoose.model("users", userSchema);
export default UserModel;
