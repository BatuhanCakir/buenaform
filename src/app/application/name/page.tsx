"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { set, z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormComponentItem } from "@/components/component/form-component-item";
import { PhoneInput } from "@/components/ui/phoneInput";
import { useRouter } from "next/navigation";
import FormButtons from "@/components/component/form-buttons";
import { tenantFormAtom } from "@/atoms/atoms";
import { useAtom } from "jotai";

export default function FormComponent() {
  const router = useRouter();
  const [formAtom, setForm] = useAtom(tenantFormAtom);

  const formSchema = z.object({
    fullname: z.string().min(1, { message: "Full Name is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: formAtom.fullname,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setForm({ ...formAtom, fullname: values.fullname });
    router.push("/application/email");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormComponentItem
              description="This is your public display name."
              label="Fullname"
              formComponent={<Input placeholder="fullname" {...field} />}
            />
          )}
        />
        <FormButtons />
      </form>
    </Form>
  );
}
