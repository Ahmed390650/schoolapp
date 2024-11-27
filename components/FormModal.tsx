"use client";
import { useForm, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "./hooks/use-toast";
import { subjectSchema } from "@/lib/schemaValiation";
interface inputObject {
  name: string;
  placeholder: string;
  description: string;
}
const schemas = {
  subject: subjectSchema,
};
export default function InputForm({
  columns = [{ description: "", name: "", placeholder: "" }],
  typeSchema,
}: {
  columns?: inputObject[];
  typeSchema: string;
}) {
  const schema: any = schemas[typeSchema];
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  function onSubmit() {
    toast({
      title: "You submitted the following values:",
      variant: "destructive",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {columns.map(({ description, name, placeholder }) => (
          <FormField
            key={name}
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{name}</FormLabel>
                <FormControl>
                  <Input placeholder={placeholder} {...field} />
                </FormControl>
                <FormDescription>{description}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
}
