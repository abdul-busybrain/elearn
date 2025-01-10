"use client";

import { Form, Tabs } from "antd";
import React, { useState } from "react";
import BasicTab from "./basic-tab";
import DescriptionTab from "./description-tab";
import CurriculumTab from "./curriculum-tab";

export default function CourseForm() {
  const [activeTab, setActiveTab] = useState("1");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [promoVideo, setPromoVideo] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [sections, setSections] = useState<any[]>([]);

  const onFinish = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <div className="mt-7">
      <Form onFinish={onFinish} layout="vertical">
        <Tabs
          defaultActiveKey="1"
          activeKey={activeTab}
          onTabClick={(key) => setActiveTab(key)}
        >
          <Tabs.TabPane tab="Basic" key={1}>
            <BasicTab
              coverImage={coverImage}
              setCoverImage={setCoverImage}
              promoVideo={promoVideo}
              setPromoVideo={setPromoVideo}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Description" key={2}>
            <DescriptionTab
              description={description}
              setDescription={setDescription}
            />
          </Tabs.TabPane>

          <Tabs.TabPane tab="Curriculum" key={3}>
            <CurriculumTab sections={sections} setSections={setSections} />
          </Tabs.TabPane>
        </Tabs>
      </Form>
    </div>
  );
}
