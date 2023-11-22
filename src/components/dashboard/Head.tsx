import Userbar from "@/components/Userbar";
import PageTitle from "@/components/dashboard/PageTitle";
import { getPage } from "@/sanity/lib/query";

export default async function Page() {
  const page = await getPage();

  console.log(page);

  return (
    <div className="flex flex-row justify-between">
      <PageTitle title="asdss" fullTitle="Main Dashboard" />
      <Userbar />
    </div>
  );
}
