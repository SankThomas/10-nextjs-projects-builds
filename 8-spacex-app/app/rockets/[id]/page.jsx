import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getDataFromAPI } from "@/lib/utils";
import { HeightIcon } from "@radix-ui/react-icons";
import { DiameterIcon } from "lucide-react";
import { WeightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function SingleRocket({ params }) {
  const id = await params;
  const rocket = await getDataFromAPI(
    `https://api.spacexdata.com/v4/rockets/${id.id}`,
  );

  return (
    <div className="container mx-auto">
      {rocket ? (
        <div>
          <h1 className="mb-8 text-center text-4xl font-bold">{rocket.name}</h1>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="mx-auto max-w-2xl">
              <Carousel>
                <CarouselContent>
                  {rocket.flickr_images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={rocket.name}
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="border border-neutral-800 bg-transparent hover:bg-neutral-700 hover:text-white" />
                <CarouselNext className="border border-neutral-800 bg-transparent hover:bg-neutral-700 hover:text-white" />
              </Carousel>
            </div>

            <article>
              <CardDescription className="leading-6">
                {rocket.description}
              </CardDescription>

              <ul className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-2">
                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <HeightIcon className="mx-auto block" />
                  <h3 className="font-semibold">Height</h3>
                  <CardDescription>{rocket.height.meters} m</CardDescription>
                  <CardDescription>{rocket.height.feet} ft</CardDescription>
                </li>

                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <WeightIcon className="mx-auto block" />
                  <h3 className="font-semibold">Weight</h3>
                  <CardDescription>
                    {rocket.mass.kg.toLocaleString()} kgs
                  </CardDescription>
                  <CardDescription>
                    {rocket.mass.lb.toLocaleString()} lbs
                  </CardDescription>
                </li>

                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <DiameterIcon className="mx-auto block" />
                  <h3 className="font-semibold">Diameter</h3>
                  <CardDescription>{rocket.diameter.meters} m</CardDescription>
                  <CardDescription>{rocket.diameter.feet} ft</CardDescription>
                </li>
              </ul>

              <article className="mt-8">
                <CardTitle>Payload Weights</CardTitle>

                <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                  {rocket.payload_weights.map((p) => (
                    <div
                      key={p.id}
                      className="space-y-2 rounded-lg border border-neutral-800 p-4"
                    >
                      <h3 className="font-semibold uppercase">{p.id}</h3>
                      <CardDescription>{p.name}</CardDescription>
                      <CardDescription>
                        {p.kg.toLocaleString()} kgs
                      </CardDescription>
                      <CardDescription>
                        {p.lb.toLocaleString()} lbs
                      </CardDescription>
                    </div>
                  ))}
                </div>
              </article>
            </article>
          </div>
        </div>
      ) : (
        <p className="text-center text-sm text-neutral-600">
          Loading rocket details...
        </p>
      )}
    </div>
  );
}
