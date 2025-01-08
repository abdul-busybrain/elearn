"use client";

import usersGlobalStore, { IUsersGlobalStore } from "@/store/user-stores";

export default function Home() {
  const { currentUserData } = usersGlobalStore() as IUsersGlobalStore;

  return (
    <div className="p-5 flex flex-col gap-5">
      <h1>Homepage</h1>
    </div>
  );
}
