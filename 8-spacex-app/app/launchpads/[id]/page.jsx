import { CardDescription } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getDataFromAPI } from "@/lib/utils";
import { RocketIcon } from "lucide-react";
import { LocateIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function SingleLaunchpad({ params }) {
  const id = await params;
  const launchpad = await getDataFromAPI(
    `https://api.spacexdata.com/v4/launchpads/${id.id}`,
  );

  return (
    <div className="container mx-auto">
      {launchpad ? (
        <div>
          <h1 className="mb-8 text-center text-4xl font-bold">
            {launchpad.full_name} ({launchpad.name})
          </h1>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="mx-auto max-w-2xl">
              <Carousel>
                <CarouselContent>
                  {launchpad.images.large.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={launchpad.name}
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <article>
              {launchpad.status === "active" ? (
                <p className="mb-2 inline-block rounded-lg bg-emerald-400/25 px-4 text-sm text-emerald-400">
                  Active
                </p>
              ) : launchpad.status === "retired" ? (
                <p className="mb-2 inline-block rounded-lg bg-rose-400/25 px-4 text-sm text-rose-400">
                  Retired
                </p>
              ) : launchpad.status === "under construction" ? (
                <p className="mb-2 inline-block rounded-lg bg-blue-400/25 px-4 text-sm text-blue-400">
                  Under Construction
                </p>
              ) : null}

              <CardDescription className="leading-6">
                {launchpad.details}
              </CardDescription>

              <div className="mt-8 grid gap-8 text-center sm:grid-cols-2 md:grid-cols-3">
                <div className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <LocateIcon className="mx-auto block" />
                  <h3>Location</h3>
                  <CardDescription>
                    {launchpad.locality}, {launchpad.region}
                  </CardDescription>
                </div>

                <div className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <RocketIcon className="mx-auto block" />
                  <h3>Launches</h3>
                  <CardDescription>
                    {launchpad.launches.length} launches
                  </CardDescription>
                </div>

                <div className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <RocketIcon className="mx-auto block" />
                  <h3>Launch Attempts</h3>
                  <CardDescription>
                    {launchpad.launch_attempts} launch attempts
                  </CardDescription>
                  <CardDescription>
                    {launchpad.launch_successes} launch successes
                  </CardDescription>
                  <CardDescription>
                    {launchpad.launch_attempts - launchpad.launch_successes}{" "}
                    failed launches
                  </CardDescription>
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : (
        <p className="text-center text-sm text-neutral-600">
          Loading launchpad details...
        </p>
      )}
    </div>
  );
}
