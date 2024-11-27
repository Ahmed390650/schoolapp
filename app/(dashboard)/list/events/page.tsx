import { DataTable } from "@/components/DataTable";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Event, Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Event>[] = [
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

const LessonListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParmas } = await searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.EventWhereInput = {};
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.title = { contains: value, mode: "insensitive" };
            break;
        }
      }
    }
  }
  const [parent, count] = await prisma.$transaction([
    prisma.event.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.event.count({
      where: query,
    }),
  ]);
  const data: any = parent;
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} count={count} page={p} />
    </div>
  );
};

export default LessonListPage;
