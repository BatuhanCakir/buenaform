import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormButtons from "@/components/component/form-buttons";
import { Progress } from "@/components/ui/progress";
import { ProgressBar } from "@/components/component/progress-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Tenant Application Form</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        <ProgressBar />
      </Card>
    </div>
  );
}
