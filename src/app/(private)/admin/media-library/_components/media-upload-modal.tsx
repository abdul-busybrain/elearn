import { Button, Input, message, Modal, Upload } from "antd";
import { useState } from "react";

function MediaUploadModal({
  showMediaUploadModal,
  setShowMediaUploadModal,
  reloadData,
}: {
  showMediaUploadModal: boolean;
  setShowMediaUploadModal: (show: boolean) => void;
  reloadData: () => void;
}) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onUpload = async () => {
    try {
      setLoading(true);

    //   upload video to supabase storage and get download url

    // save media to mongodb media-library collection
    } catch (error: any) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={showMediaUploadModal}
      onCancel={() => setShowMediaUploadModal(false)}
      title="UPLOAD MEDIA"
      footer={null}
      centered
    >
      <div className="flex flex-col gap-5">
        <div>
          <label htmlFor="name">Video name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type video name"
          />
        </div>

        <div>
          <Upload
            listType="picture-card"
            beforeUpload={(file) => {
              setSelectedFile(file);
              return false;
            }}
            onRemove={() => setSelectedFile(null)}
            maxCount={1}
          >
            <span className="text-xs">
              {selectedFile ? "Change video" : "Click to upload"}
            </span>
          </Upload>
        </div>

        <div className="flex justify-end gap-5">
          <Button>Cancel</Button>
          <Button
            type="primary"
            disabled={!selectedFile || !name}
            loading={loading}
            onClick={onUpload}
          >
            Upload
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default MediaUploadModal;
