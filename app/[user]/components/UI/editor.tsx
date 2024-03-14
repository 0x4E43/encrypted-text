export default function Editor() {
  return (
    <>
      <div className="flex flex-col flex-1 h-full">
        <input
          type="text"
          placeholder="Title"
          className="text-xl bg-inherit mb-2 p-2"
        />
        <textarea
          placeholder="My million dollar ideas"
          className="flex-1 w-full bg-inherit resize-none p-2"
        ></textarea>
        <div className="m-2">
            <button className="btn btn-primary m-2">Save</button>
            <button className="btn btn-ghost m-2">Cancel</button>
        </div>
      </div>
    </>
  );
}
