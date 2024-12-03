import { Teacher } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const teacherColumns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "id",
    header: "teacherId",
  },
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "phone",
    header: "phone",
    filterFn: "includesString",
  },
  {
    accessorKey: "address",
    header: "address",
  },
  {
    accessorKey: "classes",
    header: "classes",
  },
  {
    accessorKey: "subjects",
    header: "subjects",
  },
];
