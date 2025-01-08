import { IUSer } from "@/interfaces";
import { create } from "zustand";

const usersGlobalStore = create((set) => ({
  currentUserData: null,
  setCurrentUserData: (data: IUSer) => set({ currentUserData: data }),
}));

export default usersGlobalStore;

export interface IUsersGlobalStore {
  currentUserData: IUSer | null;
  setCurrentUserData: (data: IUSer) => void;
}
