"use client";

import PreviewLinks from "@/components/previewlinks";
import { Button } from "@/components/ui/button";
import { StateContext } from "@/context/state";
import Image from "next/image";
import React, { useContext } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ProfileDetails() {
  const { firstName, setFirstName, lastName, setLastName, email, setEmail } =
    useContext(StateContext);

  const router = useRouter();

  const handleShowPreview = () => {
    toast("Profile data saved!", {
      description: "You will now be redirected to the preview page",
    });

    router.push("/preview");
  };

  return (
    <div className="container mx-auto">
      <div className="grid gap-8 pb-8 lg:grid-cols-3 lg:items-start">
        <section className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 lg:p-12">
          <PreviewLinks />
        </section>

        <section className="col-span-2 rounded-lg border border-neutral-800 bg-neutral-900 p-6 lg:p-12">
          <h1 className="mb-8 text-2xl font-bold text-white lg:text-4xl">
            Profile Details
          </h1>

          <Image
            src="https://images.unsplash.com/photo-1669475576662-af6f022dad1a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            width={100}
            height={100}
            className="mx-auto block h-[100px] w-[100px] rounded-full object-cover"
          />

          <form className="mt-12 grid gap-6">
            <div className="grid lg:grid-cols-3 lg:items-center">
              <label htmlFor="first-name">First Name*</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Thomas"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="col-span-2 placeholder-neutral-400"
              />
            </div>

            <div className="grid lg:grid-cols-3 lg:items-center">
              <label htmlFor="last-name">Last Name*</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Sankara"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="col-span-2 placeholder-neutral-400"
              />
            </div>

            <div className="grid lg:grid-cols-3 lg:items-center">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-2 placeholder-neutral-400"
              />
            </div>
          </form>

          <div className="mt-12">
            <Button
              onClick={handleShowPreview}
              variant="blue"
              size="lg"
              className="font-semibold"
            >
              Save
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
