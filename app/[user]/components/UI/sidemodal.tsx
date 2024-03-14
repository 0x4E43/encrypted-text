import Editor from "./editor";

export default function SideModal() {
  return (
    <>
      <div className="modal-box h-1/2">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <Editor/>
      </div>
    </>
  );
}
