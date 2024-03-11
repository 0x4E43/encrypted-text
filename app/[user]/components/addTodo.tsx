
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
        <div className="top-0 right-0 bottom-0 left-0 w-4/5">
          <div className="flex flex-col h-full">
            <div className="w-1/2 m-4">
                <button className="btn btn-primary" onClick={togleModal}>Add Note 📝</button>
            </div>
          </div>
        </div>
        {modal && <SideModal/>}
    </>
  );
};

export default AddTodo;
