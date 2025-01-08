"use server";

import UserModel from "@/models/user-model";
import { currentUser } from "@clerk/nextjs/server";

export const saveCurrentUserToMongoDB = async () => {
  try {
    const clerkUserDetails = await currentUser();
    const mongoDBUserPayload = {
      name: clerkUserDetails?.firstName + " " + clerkUserDetails?.lastName,
      email: clerkUserDetails?.emailAddresses[0].emailAddress,
      clerkUserId: clerkUserDetails?.id,
      profilePic: clerkUserDetails?.imageUrl,
      isAdmin: false,
      isActive: true,
    };

    const newUser = new UserModel(mongoDBUserPayload);
    await newUser.save();

    return {
      success: true,
      message: "User saved to MongoDB",
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export const getCurrentUserFromMongoDB = async () => {
  try {
    const clerkUserDetails = await currentUser();

    // check if user exists in MongoDB, if not save it else return the user
    const user = await UserModel.findOne({ clerkUserId: clerkUserDetails?.id });
    if (user) {
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }

    const saveUserResponse = await saveCurrentUserToMongoDB();
    if (saveUserResponse.success) {
      return {
        success: true,
        data: saveUserResponse.data,
      };
    }

    return {
      success: false,
      message: "User not found in MongoDB",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
