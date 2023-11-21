export default async function Page({
  title,
  fullTitle,
}: {
  title: string;
  fullTitle: string;
}) {
  return (
    <div className="flex-col">
      <div className="">Page / {title}</div>
      <div className="">{fullTitle}</div>
    </div>
  );
}
