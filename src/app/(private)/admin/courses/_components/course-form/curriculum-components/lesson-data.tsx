import { Edit2, MoreVertical, PlusIcon, Trash2 } from "lucide-react";
import ActionMenuItem from "./action-menu-item";
import { Button, Dropdown, MenuProps } from "antd";
import { useState } from "react";
import LessonFormModal from "./lesson-form-modal";

function LessonData({
  lesson,
  lessonIndex,
  setSections,
  sectionIndex,
}: {
  lesson: any;
  lessonIndex: number;
  setSections: any;
  sectionIndex: number;
}) {
  const [showLessonFormModal, setShowLessonFormModal] = useState(false);

  const handleDeleteLesson = () => {
    setSections((prev: any) => {
      const updatedSections = [...prev];
      updatedSections[sectionIndex].lessons.splice(lessonIndex, 1);
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
            setShowLessonFormModal(true);
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
          onClick={() => handleDeleteLesson()}
        />
      ),
    },
  ];

  return (
    <div key={lessonIndex} className="bg-gray-100 p-2 border border-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-sm">
          {lessonIndex + 1} : {lesson.name}
        </h1>

        <Dropdown menu={{ items }} placement="bottomLeft" trigger={["click"]}>
          <Button className="border-none" size="small">
            <MoreVertical size={20} />
          </Button>
        </Dropdown>
      </div>

      {showLessonFormModal && (
        <LessonFormModal
          selectedLesson={lesson}
          lessonIndex={lessonIndex}
          setSections={setSections}
          setShowLessonFormModal={setShowLessonFormModal}
          showLessonFormModal={showLessonFormModal}
          type="edit"
          sectionIndex={0}
        />
      )}
    </div>
  );
}

export default LessonData;
