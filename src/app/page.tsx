import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button, Input, ConfigProvider } from "antd";

export default async function Home() {
  let email = "";
  let name = "";

  const user: any = await currentUser();
  name = user?.fullName;
  email = user?.emailAddresses[0].emailAddress;

  return (
    <ConfigProvider>
      <div className="p-5 flex flex-col gap-5">
        <h1>Elearn</h1>
        <UserButton />
        <h1>Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>{`Clerk user ID: ${user.id}`}</h1>
      </div>
    </ConfigProvider>
  );
}
