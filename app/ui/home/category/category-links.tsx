"use client";

import {
  TagIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "T-Shirts", href: "/home/category/t-shirts" },
  {
    name: "Pants",
    href: "/home/category/pants",
  },
  { name: "Accessories", href: "/home/category/accessories" },
  { name: "Shoes", href: "/home/category/shoes" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "category-bar flex h-[48px] grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-slate-200 hover:text-slate-800 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-slate-100 text-slate-700": pathname === link.href,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
