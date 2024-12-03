import { Assignment } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const AssignmentsColumns: ColumnDef<Assignment>[] = [
  {
    header: "id",
    accessorKey: "id",
  },
  {
    header: "dueDate",
    accessorKey: "dueDate",
  },
  {
    header: "lessonId",
    accessorKey: "lessonId",
  },
  {
    header: "startDate",
    accessorKey: "startDate",
  },
  {
    header: "title",
    accessorKey: "title",
  },
];
