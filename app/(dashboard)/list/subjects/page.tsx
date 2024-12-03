import { DataTable } from "@/components/DataTable";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Prisma } from "@prisma/client";
import { columnsSubjects } from "./columns";
import SubjectForm from "@/components/Forms/subjectForm";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page, ...queryParmas } = await searchParams;

  const query = {} as Prisma.SubjectWhereInput;
  if (queryParmas) {
    for (const [key, value] of Object.entries(queryParmas)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
        }
      }
    }
  }
  const p = page ? parseInt(page) : 1;
  const [teacher, count] = await prisma.$transaction([
    prisma.subject.findMany({
      where: query,
      include: {
        teachers: true,
        lessons: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.subject.count({
      where: query,
    }),
  ]);
  const data: any = teacher;
  return (
    <div className="container mx-auto py-10">
      <SubjectForm columns={columnsSubjects} />
      {/* <DataTable columns={columnsSubjects} data={data} count={count} page={p} /> */}
    </div>
  );
}
