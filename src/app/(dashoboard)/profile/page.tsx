import Userbar from "@/components/Userbar";
import DashboardHead from "@/components/dashboard/Head";
import { getProfile, getPage } from "@/sanity/lib/query";
import type { ProfileType } from "@/types";
import Image from "next/image";

export default async function Page() {
  const page: ProfileType[] = await getPage();
  // console.log(page);

  return <div>Profile content</div>;
}
