"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ColumnDef } from "@tanstack/react-table";
import { ComboboxDemo } from "./ui/comboBox";

export default function InputForm<TData>({
  columns,
  form,
}: {
  columns?: ColumnDef<TData>[];
  form: any;
}) {
  const RenderInput = ({
    field,
    column,
  }: {
    field: any;
    column: ColumnDef<TData>;
  }) => {
    switch (column.type) {
      case "boolean":
        return (
          <Input
            type="checkbox"
            className="flex items-center justify-center"
            placeholder={column.header as string}
            {...field}
          />
        );
      case "date":
        return (
          <Input
            type="date"
            className="flex  justify-between"
            placeholder={column.header as string}
            {...field}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            placeholder={column.header as string}
            {...field}
          />
        );
      case "array":
        return <ComboboxDemo {...field} />;
      default:
        return <Input placeholder={column.header as string} {...field} />;
    }
  };
  return (
    <div className="grid grid-cols-2 gap-2">
      {columns?.map((column, i) => {
        const { header } = column;
        return (
          <FormField
            key={i}
            control={form.control}
            name={header as string}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>{header as string}</FormLabel>
                <FormControl>
                  <RenderInput column={column} field={field} />
                </FormControl>
                <FormDescription>{header as string}</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      })}
    </div>
  );
}
