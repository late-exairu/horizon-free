import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="-my-5 -ml-5 w-[290px] bg-white">
      <div className=" flex h-[130px] items-center justify-center border-b border-slate-100">
        <Link href="/">
          <Image src="logo.svg" width="180" height="26" alt="logo" />
        </Link>
      </div>

      <div className="flex flex-col gap-1 font-medium text-slate-500 ">
        <Link
          className="flex min-h-[36px] items-center px-[30px]"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className="flex min-h-[36px] items-center px-[30px]"
          href="/marketplace"
        >
          Marketplace
        </Link>
        <Link
          className="flex min-h-[36px] items-center px-[30px]"
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className="flex min-h-[36px] items-center px-[30px]"
          href="/tables"
        >
          Tables
        </Link>
      </div>
    </div>
  );
}
