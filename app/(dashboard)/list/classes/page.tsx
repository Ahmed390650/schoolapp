import { DataTable } from "@/components/DataTable";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Class, Prisma } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

const columns: ColumnDef<Class>[] = [
  {
    header: "Class Name",
    accessorKey: "name",
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
  },
  {
    header: "Grade",
    accessorKey: "grade",
  },
  {
    header: "Supervisor",
    accessorKey: "supervisor",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];

const ClassListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParmas } = await searchParams;

  const query = {} as Prisma.ClassWhereInput;
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "supervisorId":
            query.supervisorId = value;
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }
  const p = page ? parseInt(page) : 1;
  const [teacher, count] = await prisma.$transaction([
    prisma.class.findMany({
      where: query,
      include: {
        lessons: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.class.count({
      where: query,
    }),
  ]);
  const data: any = teacher;
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <DataTable columns={columns} data={data} count={count} page={p} />
    </div>
  );
};

export default ClassListPage;
