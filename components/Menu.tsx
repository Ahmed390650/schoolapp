"use client";
import { menuItems } from "@/lib/Data";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
function Menu() {
  const hover = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();
  const role = user?.publicMetadata.role as string;
  return (
    <div className="mt-1 text-sm ">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden md:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
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
