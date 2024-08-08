import React from "react";
import Image from "next/image";
import { PowerIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavLinks from "@/app/ui/home/heading-links";

export default function Header() {
  return (
    <header className="bg-gray-100 p-4">
      <div className=" mx-auto flex justify-evenly items-center">
        <div className="flex items-center">
          <Image
            className="mb-4"
            src="/logo.png"
            alt="logo"
            width={75}
            height={75}
          />
        </div>
        <NavLinks />

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar"
              className="px-2 py-1 rounded"
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <MagnifyingGlassIcon className="w-4 color-slate-800" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
