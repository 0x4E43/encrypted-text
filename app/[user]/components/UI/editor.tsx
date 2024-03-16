
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { RiPaintFill } from "react-icons/ri";




export default function Editor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  }
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log({title, content});
  }
  return (
    <>
      <div className="flex flex-col flex-1 h-full">
        <input
          type="text"
          placeholder="Title ..."
          className="text-2xl bg-inherit mb-2 p-2  rounded-xl"
          onChange={handleTitleChange}
          value={title}
        />
        <textarea
          placeholder="My million dollar ideas ..."
          className="flex-1 w-full bg-inherit resize-none p-2  rounded-xl"
          onChange={handleContentChange}
          value={content}
        ></textarea>
        <div className="m-4 self-end align-bottom mb-[-5px]">
          <button className="btn btn-sm btn-circle btn-ghost m-2">
                <RiPaintFill className="h-6 w-6 text-blue-500"/>
            </button>
            <button className="btn btn-sm btn-circle btn-ghost m-2">
                <HiSparkles className="h-6 w-6 text-yellow-500"/>
            </button>
            <button className="btn btn-sm btn-circle btn-ghost m-2" onClick={handleSubmit}>
                <FaCheck className="h-6 w-6 text-green-500"/>
            </button>
            
        </div>

      </div>
    </>
  );
}
