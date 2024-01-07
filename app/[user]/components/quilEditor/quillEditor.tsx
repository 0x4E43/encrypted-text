import EditorToolbar, { formats, modules } from "@/app/utils/editorToolbar";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const QuillEditor = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="w-full">
        <EditorToolbar />
        <div className="w-full">
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder={"Write something awesome..."}
            modules={modules}
            formats={formats}
            style={{
              height: "50vh",
              fontSize: "2.5rem",
              border: "none",
            }}
          />
        </div>
      </div>
      <p>{value}</p>
    </>
  );
};

export default QuillEditor;
