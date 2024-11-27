import { Announcements, BigCalendar } from "@/components/index";
import { Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = ({ teacher }: { teacher: Teacher }) => {
  return (
    <div className="flex flex-1 flex-col gap-4 xl:flex-row p-4">
      <div className="w-full xl:w-2/3 ">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-lamaSky py-7 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                width={144}
                height={144}
                className="rounded-full w-36 h-36 object-cover"
                src={
                  teacher?.img ||
                  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                }
                alt=""
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">
                  {teacher?.name || "null"}
                </h1>
                {<></>}
              </div>

              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                    <Image src="/blood.png" alt="" width={14} height={14} />
                    <span>A+</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1 gap-4 justify-between flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
                key={i}>
                <Image
                  src="/singleAttendance.png"
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="">
                  <h1 className="text-xl font-semibold">90%</h1>
                  <span className="text-sm text-gray-400">Attendance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Teacher&apos;s Classes
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href={`/list/students?teacherId=${teacher?.id || "teacher2"}`}>
              Teacher&apos;s Students
            </Link>
            <Link className="p-3 rounded-md bg-lamaYellowLight" href="">
              Teacher&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href="/">
              Teacher&apos;s Exams
            </Link>
            <Link className="p-3 rounded-md bg-lamaSkyLight" href="/">
              Teacher&apos;s Assignments
            </Link>
          </div>
        </div>
        {/* <Performance /> */}
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
