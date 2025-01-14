"use client";

import { useState } from "react";

import PageTitle from "@/components/page-title";
import { Button } from "antd";
import MediaUploadModal from "./_components/media-upload-modal";

function MediaLibrary() {
  const [showMediaUploadModal, setShowMediaUploadModal] = useState(false);
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Media library" />
        <Button onClick={() => setShowMediaUploadModal(true)}>
          UPLOAD NEW MEDIA
        </Button>
      </div>

      {showMediaUploadModal && (
        <MediaUploadModal
          showMediaUploadModal={showMediaUploadModal}
          setShowMediaUploadModal={setShowMediaUploadModal}
          reloadData={() => {}}
        />
      )}
    </div>
  );
}

export default MediaLibrary;
