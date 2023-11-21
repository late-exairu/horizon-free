import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="-my-5 -ml-5 w-[290px] bg-white">
      <div className=" flex h-[148px] items-center justify-center border-b border-slate-100">
        <Link href="/">
          <Image src="logo.svg" width="180" height="26" alt="logo" />
        </Link>
      </div>

      <div className="flex-column flex gap-1 font-medium text-slate-500 ">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/tables">Tables</Link>
      </div>
    </div>
  );
}
