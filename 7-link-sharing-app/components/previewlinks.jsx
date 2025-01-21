"use client";

import { StateContext } from "@/context/state";
import { useContext } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function PreviewLinks() {
  const { firstName, lastName, email, links } = useContext(StateContext);

  return (
    <div className="mx-auto h-[700px] w-full space-y-12 rounded-[40px] border-4 border-neutral-800 px-4 py-12 lg:max-w-[375px]">
      <Image
        src="https://images.unsplash.com/photo-1669475576662-af6f022dad1a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="profile"
        width={100}
        height={100}
        className="mx-auto block h-[100px] w-[100px] rounded-full object-cover"
      />
      <div className="space-y-2 text-center">
        <h2 className="font-bold text-white lg:text-2xl">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-neutral-400">{email}</p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <Button asChild variant="outline" className="w-[320px]">
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
