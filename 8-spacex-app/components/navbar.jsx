"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    title: "Crew",
    url: "/crew",
  },
  {
    title: "Rockets",
    url: "/rockets",
  },
  {
    title: "Dragons",
    url: "/dragons",
  },
  {
    title: "Launchpads",
    url: "/launchpads",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-1/2 z-10 m-4 mx-auto w-full max-w-4xl -translate-x-1/2 rounded-full border border-neutral-800 bg-neutral-900/75 p-4 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold">
            SpaceX
          </Link>
        </div>

        <nav>
          <ul className="flex items-center justify-start space-x-4">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className={`text-sm text-muted-foreground hover:text-white/65 ${link.url === pathname && "text-white underline hover:text-white"}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
