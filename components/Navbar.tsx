import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";
import { Skeleton } from "./ui/skeleton";
const Navbar = async () => {
  const user = await currentUser();
  if (!user) return null;
  return (
    <div className="flex items-center justify-between p-4">
      {/**Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" height={14} width={14} />
        <input
          type="text"
          placeholder="Search ..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/**icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white">
          <Image src="/announcement.png" width={20} height={20} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">
            {user?.fullName as string}
          </span>
          <span className="text-[12px] text-gray-500 text-right">
            {user?.publicMetadata.role as string}
          </span>
        </div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
