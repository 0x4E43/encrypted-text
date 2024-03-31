"use client";
import UserNav from "./components/userNav";
import AddTodo from "./components/addTodo";
import { use, useEffect, useState } from "react";
import { CardUI } from "./components/UI/cardUI";

const UserPage = () => {
  const [notes, setNotes] = useState<Notes[]>([]);

  useEffect(() => {
    fetch("/api/content", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        siteName: "hello",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setNotes(data.data);
      });
  }, []); // Correctly positioned the dependency array// Moved the dependency array outside of the `.then` method
  return (
    <>
      <UserNav />
      <div>
        <AddTodo />
        <CardUI items={notes} />
      </div>
    </>
  );
};

export default UserPage;
