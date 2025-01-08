import PageTitle from "@/components/page-title";
import React from "react";
import CourseForm from "../_components/course-form";

export default function NewCoursePage() {
  return (
    <div>
      <PageTitle title="New course " />
      <CourseForm />
    </div>
  );
}
