import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      This is the start of the application
      <Link href="application/name">Start</Link>
    </div>
  );
}
