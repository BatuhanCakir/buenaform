import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

import { ReactNode } from "react";

export function FormComponentItem({
  label,
  description,
  formComponent,
}: {
  label: string;
  description?: string;
  formComponent: ReactNode;
}) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{formComponent}</FormControl>
      {description && <FormDescription>{description}</FormDescription>}

      <FormMessage />
    </FormItem>
  );
}
