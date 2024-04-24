import Landing from "@/components/landing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div>
        <Landing />
      </div>
    </main>
  );
}
