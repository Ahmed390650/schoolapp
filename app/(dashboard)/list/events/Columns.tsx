import { Event } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const eventsColumns: ColumnDef<Event>[] = [
  {
    header: "classId",
    accessorKey: "classId",
  },
  {
    header: "description",
    accessorKey: "description",
  },
  {
    header: "endTime",
    accessorKey: "endTime",
  },
  {
    header: "startTime",
    accessorKey: "startTime",
  },
  {
    header: "title",
    accessorKey: "title",
  },
];
