import { DataTable } from "@/components/DataTable";
import { Input } from "@/components/ui/input";
import { teachersData } from "@/lib/Data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Prisma, Student } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export let columns: ColumnDef<Student>[] = [
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
  const query: Prisma.StudentWhereInput = {};
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "teacherId":
            query.class = {
              lessons: {
                some: {
                  teacherId: value,
                },
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
        }
      }
    }
  }
  const [student, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.student.count({
      where: query,
    }),
  ]);
  const data: any = student;
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} count={count} page={p} />
    </div>
  );
}
