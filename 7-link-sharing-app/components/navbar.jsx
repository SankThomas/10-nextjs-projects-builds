"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LinkIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Links",
    url: "/",
  },
  {
    title: "Profile Details",
    url: "/profile-details",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="container mx-auto my-8 rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-white"
          >
            <Button variant="blue">
              <LinkIcon />
            </Button>
            Linkly
          </Link>
        </div>

        <nav>
          <ul className="flex gap-4 text-sm">
            {links.map((link, index) => (
              <li key={index}>
                <Button
                  asChild
                  variant={pathname === link.url ? "secondary" : "default"}
                >
                  <Link href={link.url} className="font-semibold">
                    {link.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          asChild
          variant={pathname === "/preview" ? "secondary" : "outline"}
        >
          <Link href="/preview">Preview</Link>
        </Button>
      </div>
    </header>
  );
}
