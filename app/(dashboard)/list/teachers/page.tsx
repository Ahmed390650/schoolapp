import { DataTable } from "@/components/DataTable";
import { TeacherForm } from "@/components/Forms/teacherForm";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Prisma, Teacher } from "@prisma/client";
import { TableOptions } from "@tanstack/react-table";
import { teacherColumns } from "./columns";
import { deleteTeacher } from "@/actions/actions";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page, ...queryParmas } = await searchParams;

  const query = {} as Prisma.TeacherWhereInput;
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lessons = {
              some: {
                classId: parseInt(value),
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
        }
      }
    }
  }
  const p = page ? parseInt(page) : 1;

  const [teacher, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: {
        lessons: {
          select: {
            subject: true,
            id: false,
          },
        },
        subjects: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.teacher.count({
      where: query,
    }),
  ]);
  const data: any = teacher;
  // @ts-ignore
  const ReactTable: TableOptions<Teacher> = {
    initialState: {
      columnVisibility: {
        id: false,
      },
      expanded: true,
    },
  };
  return (
    <div className="container mx-auto py-10">
      <TeacherForm columns={teacherColumns} />
      <DataTable
        columns={teacherColumns}
        data={data}
        count={count}
        page={p}
        handleDelete={deleteTeacher}
        ReactTable={ReactTable}
      />
    </div>
  );
}
