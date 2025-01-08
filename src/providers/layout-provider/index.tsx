"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Header from "./components/header";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthRoute = pathname.includes("/sign");

  if (isAuthRoute) {
    return children;
  }

  return (
    <div>
      <Header />
      <div className="p-5">{children}</div>
    </div>
  );
}
