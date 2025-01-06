import { Button, Input } from "antd";
import React from "react";

export default function Testpage() {
  return (
    <div>
      Testpage
      <div className="p-5 flex flex-col gap-5">
        <h1>Elearn</h1>
        <Button>Default button</Button>
        <Button type="primary">Default button</Button>
        <Input placeholder="Enter your name" />
      </div>
    </div>
  );
}
