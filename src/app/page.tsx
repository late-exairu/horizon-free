import Userbar from "@/components/Userbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="m-1 flex-1 sm:m-1">
      <div className="flex">
        <div className="">Pages / Dashboard</div>
        <div className="">Main Dashboard</div>
      </div>
      <Userbar />
    </main>
  );
}
