"use client";
import UserNav from "./components/userNav";
import AddTodo from "./components/addTodo";

const UserPage = () => {
  return (
    <>
      <UserNav />
      <div>
            <AddTodo />
      </div>
    </>
  );
};

export default UserPage;
