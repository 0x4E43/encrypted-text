"use client";
import UserNav from "./components/userNav";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";

const UserPage = () => {
  return (
    <>
      <UserNav />
      <div className="px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-2 border-r border-teal-50">
            <TodoList />
          </div>
          <div className="col-span-10 pl-10">
            <AddTodo />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
