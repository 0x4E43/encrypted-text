
import React, { useState } from 'react';

import SideModal from '@/app/components/elements/SideModal';

const AddTodo = () => {
  const [modal, setModal] = useState(false);
  function togleModal(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    setModal(!modal);
  }

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex w-full">
          <div className="flex flex-row">
            <h1 className="mr-2">My Notes</h1>
            <span>&gt;</span>
            <h1 className="ml-2 float-right mr-10">Dummy Notes</h1>
          </div>
          <div className="float-right">
            <p>...</p>
          </div>
        </div>
        <div className="top-0 right-0 bottom-0 left-0 w-4/5">
          <div className="flex flex-col h-full">
            <div className="w-1/2 m-4">
                <button className="btn btn-primary" onClick={togleModal}>Add Note 📝</button>
            </div>
            {modal && <SideModal/>}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
