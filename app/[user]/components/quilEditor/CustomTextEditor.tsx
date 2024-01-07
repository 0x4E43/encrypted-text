import React, { useState } from "react";
import dynamic from "next/dynamic";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DynamicEditor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface TextEditorProps {
  initialValue?: string;
}

const TextEditor = ({ initialValue }: TextEditorProps) => {
  const [editorState, setEditorState] = useState<EditorState>(() => {
    if (initialValue) {
      const contentState = convertFromRaw(JSON.parse(initialValue));
      return EditorState.createWithContent(contentState);
    } else {
      return EditorState.createEmpty();
    }
  });

  const onSave = (contentStateString: string) => {
    console.log(contentStateString);
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    const contentState = state.getCurrentContent();
    const contentStateString = JSON.stringify(convertToRaw(contentState));
    onSave(contentStateString);
  };

  return (
    <div
      style={{ height: "75vh" }}
      className="bg-base-200 text-white align-middle items-center"
    >
      <DynamicEditor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
