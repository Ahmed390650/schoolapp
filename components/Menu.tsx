"use client";
import { menuItems } from "@/lib/Data";
import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Skeleton } from "./ui/skeleton";
function Menu() {
  const hover = usePathname();
  const { user } = useUser();
  const role = user?.publicMetadata.role as string;
  return (
    <div className="mt-1 text-sm ">
      {menuItems.map((i, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <span className="hidden md:block text-gray-400 font-light my-4">
            {i.title}
            {!user && (
              <div className="flex flex-col gap-2 mt-2">
                <Skeleton className="h-[30px] w-[240px] rounded-xl" />
                <Skeleton className="h-[30px] w-[240px] rounded-xl" />
                <Skeleton className="h-[30px] w-[240px] rounded-xl" />
              </div>
            )}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              if (item.label === "Logout")
                return (
                  <SignOutButton>
                    <div
                      className="flex cursor-pointer justify-center items-center
                gap-4 lg:justify-start text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSky
                ">
                      <Image
                        width={20}
                        height={20}
                        src={item.icon}
                        alt={item.label}
                      />
                      <span className="hidden lg:block">{item.label}</span>
                    </div>
                  </SignOutButton>
                );
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex  justify-center items-center
                gap-4 lg:justify-start text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSky ${
                  hover === item.href && "bg-lamaSky"
                }`}>
                  <Image
                    width={20}
                    height={20}
                    src={item.icon}
                    alt={item.label}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}

export default Menu;
