import Link from "next/link";
import { atom, useAtom } from "jotai";
import { Progress } from "@/components/ui/progress";

export const progressAtom = atom(0);

export default function Home() {
  return (
    <div>
      <Link href="application/name">Start</Link>
    </div>
  );
}
