import { Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export let studentColumns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "studentId",
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
  },
  {
    accessorKey: "address",
    header: "address",
  },
  {
    accessorKey: "sex",
    header: "sex",
  },
  {
    accessorKey: "bloodType",
    header: "bloodType",
  },
];
