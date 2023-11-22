export default async function Page({
  title,
  fullTitle,
}: {
  title: string;
  fullTitle: string;
}) {
  return (
    <div className="flex-col pl-[10px]">
      <div className="text-sm font-medium text-slate-500">Pages / {title}</div>
      <div className="text-[2.1rem] font-bold text-blue-900">{fullTitle}</div>
    </div>
  );
}
