import { DataTable } from "@/components/DataTable";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Lesson, Prisma, Result } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Result>[] = [
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

const LessonListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParmas } = await searchParams;
  const p = page ? parseInt(page) : 1;
  const query: Prisma.ResultWhereInput = {};
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "studentId":
            query.studentId = value;
            break;
          case "search":
            query.OR = [
              { exam: { title: { contains: value, mode: "insensitive" } } },
              { student: { name: { contains: value, mode: "insensitive" } } },
            ];
            break;
          default:
            break;
        }
      }
    }
  }
  const [parent, count] = await prisma.$transaction([
    prisma.result.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.result.count({
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
