import { Button, Dropdown } from "antd";
import { Edit2, MoreVertical, PlusIcon, Trash2 } from "lucide-react";
import type { MenuProps } from "antd";
import ActionMenuItem from "./action-menu-item";
import { useState } from "react";
import SectionFormModal from "./section-form-modal";

function SectionData({
  section,
  setSections,
  sectionIndex,
}: {
  section: any;
  setSections: any;
  sectionIndex: number;
}) {
  const [showSectionFormModal, setShowSectionFormModal] = useState(false);

  const handleDeleteSection = () => {
    setSections((prev: any) => {
      const updatedSections = [...prev];
      updatedSections.splice(sectionIndex, 1);
      return updatedSections;
    });
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <ActionMenuItem
          title="Edit"
          icon={<Edit2 size={15} />}
          onClick={() => {
            setShowSectionFormModal(true);
          }}
        />
      ),
    },
    {
      key: "2",
      label: (
        <ActionMenuItem
          title="Delete"
          icon={<Trash2 size={15} />}
          onClick={() => handleDeleteSection()}
        />
      ),
    },
    {
      key: "3",
      label: (
        <ActionMenuItem
          title="Add lesson"
          icon={<PlusIcon size={15} />}
          onClick={() => {}}
        />
      ),
    },
  ];

  return (
    <div className="border p-5 border-gray-400">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold">
          Section {sectionIndex + 1} : {section.name}
        </h1>

        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
          <Button className="border-none" size="small">
            <MoreVertical size={20} />
          </Button>
        </Dropdown>
      </div>

      {showSectionFormModal && (
        <SectionFormModal
          showSectionFormModal={showSectionFormModal}
          setShowSectionFormModal={setShowSectionFormModal}
          setSections={setSections}
          selectedSection={section}
          sectionIndex={sectionIndex}
          type="edit"
        />
      )}
    </div>
  );
}

export default SectionData;
