import QuillEditor from "./quilEditor/quillEditor";

const AddTodo = () => {
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
            <form className="ml-10 mt-10 flex-1">
              <input
                type="text"
                placeholder="Your Title here"
                className="text-3xl w-full max-w-xl border-b border-gray-300 focus:outline-none h-[50px] p-4 bg-inherit font-bold mb-5"
              />
              <QuillEditor />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
