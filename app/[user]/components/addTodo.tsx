import React, { useState } from "react";

import EditorModal from "./UI/editorModal";

const AddTodo = () => {
  function togleModal(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    const modal = document.getElementById("inputModal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }

  return (
    <>
      <div>
        <div className="top-0 right-0 bottom-0 left-0 w-4/5">
          <div className="flex flex-col h-full">
            <div className="w-1/2 m-4">
              <button className="btn btn-primary" onClick={togleModal}>
                Add Note 📝
              </button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="inputModal" className="modal">
        <EditorModal />
      </dialog>
    </>
  );
};

export default AddTodo;
