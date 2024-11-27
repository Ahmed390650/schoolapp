import { DataTable } from "@/components/DataTable";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Announcement, Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Announcement>[] = [
  {
    header: "Title",
    accessorKey: "title",
  },
  {
    header: "Class",
    accessorKey: "class",
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];

const LessonListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParmas } = await searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.AnnouncementWhereInput = {};
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.title = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const [parent, count] = await prisma.$transaction([
    prisma.announcement.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.announcement.count({
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
