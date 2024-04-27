import Landing from "@/components/landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center p-10">
      <div className="flex items-center justify-between w-3/5  mx-10 lg:mx-30">
        <div className="w-12 h-12 rounded-full bg-gray-200 "></div>
        <div className="text-right">
          <h1 className="text-4xl font-bold">Vault</h1>
          <p className="text-gray-500">
            A secure place to store your passwords
          </p>
        </div>
      </div>
      <div className="my-5 mt-5">
        <h1>Some Random Info</h1>
      </div>
      <div className="mt-10">
        <Landing />
      </div>
    </main>
  );
}
