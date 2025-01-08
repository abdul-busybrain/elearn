import { getCurrentUserFromMongoDB } from "@/server-actions/users";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Button, Input, ConfigProvider, Alert } from "antd";

export default async function Home() {
  let email = "";
  let name = "";

  const response = await getCurrentUserFromMongoDB();
  if (!response.success) {
    return <Alert message={response.message} type="error" />;
  }

  name = response.data.name;
  email = response.data.email;

  return (
    <div className="p-5 flex flex-col gap-5">
      <h1>Elearn</h1>
      <UserButton />
      <h1>Name: {name}</h1>
      <h1>Email: {email}</h1>
      <h1>{`Clerk user ID: ${response.data.clerkUserId}`}</h1>
    </div>
  );
}
