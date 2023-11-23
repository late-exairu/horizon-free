"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({
  children,
  ...rest
}: { children: React.ReactNode } & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      {...rest}
      data-active={isActive}
      className={`${
        isActive ? "active" : ""
      } relative flex min-h-[36px] items-center px-[30px] hover:bg-slate-100 data-[active=true]:font-bold data-[active=true]:text-slate-800`}
    >
      {isActive && (
        <div className="absolute inset-y-0 right-0 h-full w-1 rounded-[2px] bg-blue-500"></div>
      )}
      {children}
    </Link>
  );
};

export default ActiveLink;
