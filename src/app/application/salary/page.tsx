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

import { useRouter } from "next/navigation";
import FormButtons from "@/components/component/form-buttons";
import { useAtom } from "jotai";
import { tenantFormAtom } from "@/atoms/atoms";

export default function FormComponent() {
  const router = useRouter();

  const radioOptions = [
    "0-1000",
    "1000-2000",
    "2000-3000",
    "3000-4000",
    "4000+",
  ];

  const [formAtom, setForm] = useAtom(tenantFormAtom);

  const formSchema = z.object({
    salary: z.string({
      required_error: "You need to select a salary.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      salary: formAtom.salary,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setForm({ ...formAtom, salary: values.salary });
    router.push("/application/summary");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="salary"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Salary</FormLabel>

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {radioOptions && radioOptions.length > 0
                    ? radioOptions.map((option) => {
                        return (
                          <FormItem
                            key={option}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem value={option} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {option}
                            </FormLabel>
                          </FormItem>
                        );
                      })
                    : null}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormButtons />
      </form>
    </Form>
  );
}
