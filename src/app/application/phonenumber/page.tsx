"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormComponentItem } from "@/components/component/form-component-item";
import { PhoneInput } from "@/components/ui/phoneInput";
import { useRouter } from "next/navigation";
import FormButtons from "@/components/component/form-buttons";
import { useAtom } from "jotai";
import { tenantFormAtom } from "@/atoms/atoms";

export default function FormComponent() {
  const router = useRouter();
  const [formAtom, setForm] = useAtom(tenantFormAtom);

  const formSchema = z.object({
    phonenumber: z
      .string()
      .min(10, { message: "Must be a valid mobile number" })
      .max(14, { message: "Must be a valid mobile number" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phonenumber: formAtom.phonenumber,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setForm({ ...formAtom, phonenumber: values.phonenumber });
    router.push("/application/salary");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="phonenumber"
          render={({ field }) => (
            <FormItem>
              <FormComponentItem
                label="Phonenumber"
                formComponent={<PhoneInput {...field} defaultCountry="DE" />}
              />
            </FormItem>
          )}
        />

        <FormButtons />
      </form>
    </Form>
  );
}
