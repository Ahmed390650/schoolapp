import { Lesson } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const lessonsColumns: ColumnDef<Lesson>[] = [
  {
    header: "Subject Name",
    accessorKey: "name",
  },
  {
    header: "Class",
    accessorKey: "class",
  },
  {
    header: "Teacher",
    accessorKey: "teacher",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];
