import { DataTable } from "@/components/DataTable";
import { Input } from "@/components/ui/input";
import { teachersData } from "@/lib/Data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Prisma, Parent } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export let columns: ColumnDef<Parent>[] = [
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
export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page, ...queryParmas } = await searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.ParentWhereInput = {};
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const [parent, count] = await prisma.$transaction([
    prisma.parent.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.parent.count({
      where: query,
    }),
  ]);
  const data: any = parent;
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} count={count} page={p} />
    </div>
  );
}
