import usersGlobalStore, { IUsersGlobalStore } from "@/store/user-stores";
import { Button, Drawer } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MenuItems from "./menu-items";

export default function Header() {
  const router = useRouter();
  const codeSymbol = "</>";
  const { currentUserData } = usersGlobalStore() as IUsersGlobalStore;
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-primary p-5 flex justify-between items-center">
      <div
        className="flex gap-1 text-xl font-bold cursor-pointer"
        onClick={() => router.push("/")}
      >
        <h1 className="text-green-500">
          E<span className="text-white">Learn</span>
        </h1>
        <h1 className="text-green-500">{codeSymbol}</h1>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-white text-sm">{currentUserData?.name}</h1>
        <Button
          icon={
            <img
              className="w-8 h-8 rounded-full"
              src={currentUserData?.profilePic}
              alt="User avatar"
              onClick={() => setShowSidebar(true)}
            />
          }
          ghost
          className="border-none"
        ></Button>
      </div>

      {showSidebar && (
        <Drawer
          open={showSidebar}
          onClose={() => setShowSidebar(false)}
          title={currentUserData?.name}
        >
          <MenuItems setShowSidebar={setShowSidebar} />
        </Drawer>
      )}
    </div>
  );
}
