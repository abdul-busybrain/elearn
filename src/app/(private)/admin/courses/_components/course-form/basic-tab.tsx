import { Form, Input, Select, Upload } from "antd";

const categories = [
  { label: "Web Development", value: "web-development" },
  { label: "Product Design", value: "product-design" },
  { label: "Mobile Development", value: "mobile-development" },
  { label: "Project Management", value: "project-management" },
  { label: "Graphic Design", value: "graphic-design" },
  { label: "Game Development", value: "game-development" },
  { label: "Data Science", value: "data-science" },
  { label: "Software Engineering", value: "software-engineering" },
  { label: "Database Administration", value: "database-administration" },
  { label: "Cyber Security", value: "cyber-security" },
  { label: "Cloud Computing", value: "cloud-computing" },
  { label: "DevOps", value: "devops" },
  { label: "Artificial Intelligence", value: "artificial-intelligence" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Blockchain", value: "blockchain" },
  { label: "Internet of Things", value: "internet-of-things" },
  { label: "Augmented Reality", value: "augmented-reality" },
  { label: "Virtual Reality", value: "virtual-reality" },
  { label: "Business Intelligence", value: "business-intelligence" },
  { label: "Digital Marketing", value: "digital-marketing" },
];

export default function BasicTab({
  coverImage,
  setCoverImage,
  promoVideo,
  setPromoVideo,
}: {
  coverImage: File | null;
  setCoverImage: (file: File) => void;
  promoVideo: File | null;
  setPromoVideo: (file: File) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <Form.Item
        label="Title"
        name={"title"}
        rules={[{ required: true, message: "Please enter course title" }]}
      >
        <Input placeholder="Enter course title" />
      </Form.Item>

      <Form.Item
        label="Subtitle"
        name={"subtitle"}
        rules={[{ required: true, message: "Please enter course subtitle" }]}
      >
        <Input.TextArea placeholder="Enter course subtitle" />
      </Form.Item>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Form.Item
          label="Price"
          name={"price"}
          rules={[{ required: true, message: "Please enter course price" }]}
        >
          <Input placeholder="Enter course price" type="number" />
        </Form.Item>

        <Form.Item
          label="Category"
          name={"category"}
          rules={[{ required: true, message: "Please enter course category" }]}
        >
          <Select placeholder="Select course category">
            {categories.map((category) => (
              <Select.Option key={category.value} value={category.value}>
                {category.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Form.Item label="Cover image" name={"cover-image"}>
          <Upload
            listType="picture-card"
            beforeUpload={(file) => {
              setCoverImage(file);
              return false;
            }}
            accept="image/*"
          >
            <span className="text-sm">Upload an image</span>
          </Upload>
        </Form.Item>

        <Form.Item label="Promo video" name={"promo-video"}>
          <Upload
            listType="picture-card"
            beforeUpload={(file) => {
              setCoverImage(file);
              return false;
            }}
            accept="video/*"
          >
            <span className="text-sm">Upload an video</span>
          </Upload>
        </Form.Item>
      </div>
    </div>
  );
}
