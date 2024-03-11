"use client";
import UserNav from "./components/userNav";
import AddTodo from "./components/addTodo";

const UserPage = () => {
  return (
    <>
      <UserNav />
      <div className="px-20">
            <AddTodo />
      </div>
    </>
  );
};

export default UserPage;
