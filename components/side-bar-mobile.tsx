"use client";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./side-bar";
import Image from "next/image";
import { sidebarRoutes } from "@/lib/sideRoutes";
import SidebarItem from "./sidebar-item";
import { route } from "@/types";
import SpecialButton from "./special-button";
import logo from "@/public/images/logo.svg";

const SidebarMobile = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="inline-block w-6 h-6 mr-2 text-black xl:hidden" />
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 border-0 bg-primary">
        <SheetHeader className="bg-[#111827] py-2">
          <div className="flex relative w-full text-center h-16">
            <Image className="p-4" src={logo} alt="logo" fill />
          </div>
        </SheetHeader>
        <aside className="w-full min-h-screen overflow-y-auto  px-2 py-4 bg-gray-900 ">
          <div className="flex flex-col mt-8 gap-2">
            {sidebarRoutes.map((route: route, index: number) => (
              <SidebarItem
                key={index}
                path={route.path}
                Icon={route.Icon}
                label={route.label}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-8  ">
            <SpecialButton />
          </div>
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default SidebarMobile;