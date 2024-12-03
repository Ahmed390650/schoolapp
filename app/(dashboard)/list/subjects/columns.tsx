"use client";
import { Subject, Teacher } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
export const columnsSubjects: ColumnDef<Subject, Teacher>[] = [
  {
    accessorKey: "id",
    header: "id",
    type: "number",
  },
  {
    accessorKey: "name",
    header: "name",
    type: "string",
  },
];
