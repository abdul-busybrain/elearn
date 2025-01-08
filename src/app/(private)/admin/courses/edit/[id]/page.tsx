import PageTitle from "@/components/page-title";
import React from "react";
import CourseForm from "../../_components/course-form";

export default function EditCoursePage() {
  return (
    <div>
      <PageTitle title="Edit course" />
      <CourseForm />
    </div>
  );
}
