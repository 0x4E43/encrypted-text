import Editor from "./editor";

export default function EditorModal() {
  return (
    <>
      <div className="modal-box h-4/5 w-3/5">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-red-500">
            ✕
          </button>
        </form>
        <Editor/>
      </div>
    </>
  );
}
