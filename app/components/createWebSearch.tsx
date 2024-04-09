"use client";
import { toastSuccess } from "@/utils/toastUtils";
import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
// import tostify css
import "react-toastify/dist/ReactToastify.css";
import PromptPassword from "../[user]/components/handlePassword";
import { useRouter } from "next/navigation";
import SetUserPassword from "./password";
import SetUserInitialPasswordPage from "../password/page";

const CreateWebSearch = () => {
  //handle the form submission
  const [siteName, setSiteName] = useState("");
  const [isSiteAvailable, setIsSiteAvailable] = useState(false);

  //handle input siteNameChange
  const handleSiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to your server
    checkSite(siteName);
    console.log("Form submitted with sitename:", siteName);
  };

  const checkSite = async (siteName: string) => {
    const response = await fetch("/api/site-check", {
      method: "POST",
      body: JSON.stringify({ siteName }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Site check response:", data);
    if (data.code === 222) {
      console.log("Checking toast");
      setIsSiteAvailable(true);
      toast.success(data.message, toastSuccess);
      //redirect to user page OR pop open a modal for passwod
    } else {
      toast.warn(data.message, toastSuccess);
    }
    // Do something with the response data, such as updating the UI
  };

  const router = useRouter();
  function handleUserNavigation() {
    localStorage.setItem("isInitialUser", "true");
    router.push("/password?siteName=" + siteName);
  }

  return (
    <>
      {isSiteAvailable ? <ToastContainer /> : <ToastContainer />}
      {isSiteAvailable && handleUserNavigation()}
      <div className="form-control flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Create your own unique URL."
          className="input input-bordered w-24 md:w-auto"
          value={siteName}
          onChange={handleSiteChange}
        />
        <button className="btn btn-primary ml-2" onClick={handleClick}>
          Let's Encrypt!{" "}
        </button>
      </div>
    </>
  );
};

export default CreateWebSearch;
