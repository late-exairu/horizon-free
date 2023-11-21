import Userbar from "@/components/Userbar";
import Image from "next/image";

export default function Page() {
  return (
    <main className="m-1 flex-1 sm:m-1">
      <div className="flex flex-row justify-between">
        <div className="flex-col">
          <div className="">Pages / Profile</div>
          <div className="">Profile</div>
        </div>
        <Userbar />
      </div>
    </main>
  );
}
