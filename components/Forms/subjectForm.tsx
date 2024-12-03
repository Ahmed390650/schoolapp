"use client";
import React from "react";
import InputForm from "../FormModal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "../hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { createSubject } from "@/actions/actions";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()), //teacher ids
});
const SubjectForm = ({ columns }: { columns: any[] }) => {
  const form = useForm<z.infer<typeof subjectSchema>>({
    resolver: zodResolver(subjectSchema),
  });
  async function onSubmit(values: z.infer<typeof subjectSchema>) {
    // Do something with the form values.
    await createSubject(values)
      .then(() =>
        toast({
          title: "You submitted the following values:",
          variant: "default",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(values, null, 2)}
              </code>
            </pre>
          ),
        })
      )
      .catch((err) =>
        toast({
          title: "Error Handle",
          variant: "destructive",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(err, null, 2)}</code>
            </pre>
          ),
        })
      );
  }

  return (
    <Form {...form}>
      <form className="w-2/3 space-y-6 " onSubmit={form.handleSubmit(onSubmit)}>
        <InputForm form={form} columns={columns} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SubjectForm;
