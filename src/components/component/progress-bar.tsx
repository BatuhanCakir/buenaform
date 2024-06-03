"use client";

import { Progress } from "../ui/progress";

import { usePathname } from "next/navigation";

const steps = {
  "/application/name": 0,
  "/application/email": 1,
  "/application/phonenumber": 2,
  "/application/salary": 3,
  "/application/summary": 4,
};

export function ProgressBar() {
  const increase = 100 / (Object.keys(steps).length - 1);
  const pathname = usePathname();
  let progress = 0;
  if (steps[pathname as keyof typeof steps]) {
    progress = increase * steps[pathname as keyof typeof steps];
  }
  return <Progress value={progress} />;
}
