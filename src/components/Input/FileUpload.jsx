import { IconPaperclip } from "@tabler/icons-react";
import React from "react";

function FileUpload({ handleFileUpload }) {
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <IconPaperclip size={22} />
      <input
        type="file"
        id="file-upload"
        onChange={handleFileUpload}
        className="hidden"
      />
    </label>
  );
}

export default FileUpload;
