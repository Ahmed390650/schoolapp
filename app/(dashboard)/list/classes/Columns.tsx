import { Class } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const clasessColumns: ColumnDef<Class>[] = [
  {
    header: "Class Name",
    accessorKey: "name",
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
  },
  {
    header: "Grade",
    accessorKey: "grade",
  },
  {
    header: "Supervisor",
    accessorKey: "supervisor",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];
