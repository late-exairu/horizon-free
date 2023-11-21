import Link from "next/link";

export default function Home() {
  return (
    <main className="text-xl font-medium">
      <div className="mt-24 flex flex-col items-center justify-center">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/dashboard">
          Dashboard
        </Link>
        <Link className="hover:underline" href="/studio">
          Studio
        </Link>
      </div>
    </main>
  );
}
