import React from "react";

export default function PageTitle({ title }: { title: string }) {
  return <h1 className="text-xl font-bold uppercase">{title}</h1>;
}
