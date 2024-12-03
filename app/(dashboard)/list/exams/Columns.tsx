import { Exam } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const examsColumns: ColumnDef<Exam>[] = [
  {
    header: "lessonId",
    accessorKey: "lessonId",
    type: "number",
  },
  {
    header: "startTime",
    accessorKey: "startTime",
    type: "date",
  },
  {
    header: "endTime",
    accessorKey: "endTime",
    type: "date",
  },
  {
    header: "title",
    accessorKey: "title",
    type: "string",
  },
];
