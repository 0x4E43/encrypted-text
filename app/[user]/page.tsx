"use client";
import UserNav from "./components/userNav";
import AddTodo from "./components/addTodo";
import { useEffect, useState } from "react";
import { CardUI } from "./components/UI/cardUI";
import { useRouter } from "next/navigation";
import HandlePassword from "./components/handlePassword";

const UserPage = () => {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(false);

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
  }, []);

  const router = useRouter();

  useEffect(() => {
    // Ensure code runs only on the client side
    if (typeof window !== "undefined") {
      const isAuth = localStorage.getItem("isAuth") ?? false;
      setIsAuth(Boolean(isAuth));
    }
  }, [router]);

  return (
    <>
      {/* need to add secure route */}
      <UserNav />
      {(isAuth && (
        <div>
          <div>
            <AddTodo />
            <CardUI className="mx-10" items={notes} />
          </div>
        </div>
      )) || <HandlePassword />}
    </>
  );
};

export default UserPage;
