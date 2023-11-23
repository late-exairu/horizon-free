import Link from "next/link";
import Image from "next/image";
import { getSideNav } from "@/sanity/lib/query";
import ActiveLink from "./ActiveLink";

export default async function Sidebar() {
  const sideNav = await getSideNav();

  return (
    <div className="-my-5 -ml-5 w-[290px] bg-white">
      <div className=" flex h-[130px] items-center justify-center border-b border-slate-100">
        <Link href="/">
          <Image src="logo.svg" width="180" height="26" alt="logo" />
        </Link>
      </div>

      <ul className="mt-10 flex flex-col gap-5 font-medium text-slate-500">
        {sideNav[0].items.map((item: any) => (
          <li key={item._key}>
            <ActiveLink href={item.url}>{item.title}</ActiveLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
