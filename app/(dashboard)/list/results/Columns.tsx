import { Result } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const resultColumns: ColumnDef<Result>[] = [
  {
    header: "id",
    accessorKey: "id",
  },
  {
    header: "examId",
    accessorKey: "examId",
  },
  {
    header: "assignmentId",
    accessorKey: "assignmentId",
  },
  {
    header: "score",
    accessorKey: "score",
  },
  {
    header: "studentId",
    accessorKey: "studentId",
  },
];
