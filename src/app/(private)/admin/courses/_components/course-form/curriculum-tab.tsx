import { Button } from "antd";
import React, { useState } from "react";
import SectionFormModal from "./curriculum-components/section-form-modal";
import SectionData from "./curriculum-components/section-data";

export default function CurriculumTab({
  sections,
  setSections,
}: {
  sections: any[];
  setSections: (sections: any[]) => void;
}) {
  const [showSectionFormModal, setShowSectionFormModal] = useState(false);

  const handleAddSection = () => {
    setShowSectionFormModal(true);
  };

  return (
    <div>
      <div className="flex justify-end">
        <Button type="primary" onClick={handleAddSection}>
          Add section
        </Button>
      </div>

      <div className="flex flex-col gap-5 mt-5">
        {sections.map((section, index) => (
          <SectionData
            key={index}
            section={section}
            setSections={setSections}
            sectionIndex={index}
          />
        ))}
      </div>

      {showSectionFormModal && (
        <SectionFormModal
          showSectionFormModal={showSectionFormModal}
          setShowSectionFormModal={setShowSectionFormModal}
          setSections={setSections}
        />
      )}
    </div>
  );
}
