"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormComponentItem } from "@/components/component/form-component-item";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import FormButtons from "@/components/component/form-buttons";
import { useAtom } from "jotai";
import { tenantFormAtom } from "@/atoms/atoms";

export default function FormComponent() {
  const [formAtom, setForm] = useAtom(tenantFormAtom);
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().email(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: formAtom.email,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setForm({ ...formAtom, email: values.email });
    router.push("/application/phonenumber");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormComponentItem
              label="Email"
              formComponent={<Input placeholder="Email" {...field} />}
            />
          )}
        />

        <FormButtons />
      </form>
    </Form>
  );
}
