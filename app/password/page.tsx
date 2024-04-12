"use client";
import { useRouter, useSearchParams } from "next/navigation";
import BrokenLink from "../components/brokenLink";

type PasswordPageProps = {
  siteName: string;
};

const SetUserInitialPasswordPage = () => {
  //take the siteName from the query and display it
  const searchParam = useSearchParams();
  const siteName = searchParam.get("siteName") ?? "NotFound";
  if (siteName === "NotFound") {
    // TODO: Create a Not found component
    // Stating its not you, its Us, Please retry
    return (
      <>
        <BrokenLink />
      </>
    );
  }

  return (
    <div>
      <h1>Set Password for {siteName}</h1>
    </div>
  );
};

export default SetUserInitialPasswordPage;
