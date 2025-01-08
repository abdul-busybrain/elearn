import PageTitle from "@/components/page-title";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

export default function AdminCoursesPage() {
  return (
    <div className="flex justify-between items-center">
      <PageTitle title="Courses" />
      <Button>
        <Link href={"/admin/courses/new"}>New course</Link>
      </Button>
    </div>
  );
}
