import React, { useEffect, useState } from "react";

function HandlePassword() {
  const [isIntialUser, setInitialUser] = useState(false);
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const isInitialUser = localStorage.getItem("isInitialUser");
    if (isInitialUser) {
      setInitialUser(true);
    } else {
      const isAuth = localStorage.getItem("isAuth");
      if (isAuth) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    }
  }, []);
  return <h1>Password Required</h1>;
}

export default HandlePassword;
