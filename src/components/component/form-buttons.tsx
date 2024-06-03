import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function FormButtons() {
  const router = useRouter();
  return (
    <div className="flex justify-between">
      <Button onClick={() => router.back()}>Back</Button>
      <Button type="submit">Next</Button>
    </div>
  );
}
