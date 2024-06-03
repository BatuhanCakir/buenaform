"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { z } from "zod";
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
import { useAtom } from "jotai";
import { tenantFormAtom } from "@/atoms/atoms";
import { Separator } from "@/components/ui/separator";

export default function FormComponent() {
  const [formAtom] = useAtom(tenantFormAtom);

  return (
    <>
      <p className="text-xl font-semibold">Summary</p>
      <Separator className="my-4" />

      <ul className="grid gap-3">
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Fullname</span>
          <span>{formAtom.fullname}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Email</span>
          <span>{formAtom.email}</span>
        </li>
        <li className="flex items-center justify-between">
          <span className="text-muted-foreground">Phonenumber</span>
          <span>{formAtom.phonenumber}</span>
        </li>
        <li className="flex items-center justify-between font-semibold">
          <span className="text-muted-foreground">Salary</span>
          <span>{formAtom.salary}</span>
        </li>
      </ul>
    </>
  );
}
