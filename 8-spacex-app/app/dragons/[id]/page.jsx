import { CardDescription, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getDataFromAPI } from "@/lib/utils";
import { HeightIcon } from "@radix-ui/react-icons";
import { WeightIcon } from "lucide-react";
import { DiameterIcon } from "lucide-react";
import { RocketIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function SingleDragon({ params }) {
  const id = await params;
  const dragon = await getDataFromAPI(
    `https://api.spacexdata.com/v4/dragons/${id.id}`,
  );

  return (
    <div className="container mx-auto">
      {dragon ? (
        <div>
          <h1 className="mb-8 text-center text-4xl font-bold">{dragon.name}</h1>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="mx-auto max-w-2xl">
              <Carousel>
                <CarouselContent>
                  {dragon.flickr_images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={dragon.name}
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
              <CardDescription className="leading-6">
                {dragon.description}
              </CardDescription>

              <ul className="mt-8 grid grid-cols-2 gap-8 text-center md:grid-cols-3">
                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <HeightIcon className="mx-auto block" />

                  <h3 className="font-semibold">Height with trunk</h3>
                  <CardDescription>
                    {dragon.height_w_trunk.meters} m
                  </CardDescription>
                  <CardDescription>
                    {dragon.height_w_trunk.feet} ft
                  </CardDescription>
                </li>

                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <RocketIcon className="mx-auto block" />

                  <h3 className="font-semibold">Trunk Volume</h3>
                  <CardDescription>
                    {dragon.trunk.trunk_volume.cubic_meters} m<sup>3</sup>
                  </CardDescription>
                  <CardDescription>
                    {dragon.trunk.trunk_volume.cubic_feet} ft<sup>3</sup>
                  </CardDescription>
                </li>

                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <WeightIcon className="mx-auto block" />

                  <h3 className="font-semibold">Dry Mass</h3>
                  <CardDescription>
                    {dragon.dry_mass_kg.toLocaleString()} kg
                  </CardDescription>
                  <CardDescription>
                    {dragon.dry_mass_lb.toLocaleString()} lb
                  </CardDescription>
                </li>

                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <DiameterIcon className="mx-auto block" />

                  <h3 className="font-semibold">Diameter</h3>
                  <CardDescription>{dragon.diameter.meters} m</CardDescription>
                  <CardDescription>{dragon.diameter.feet} ft</CardDescription>
                </li>

                <li className="space-y-2 rounded-lg border border-neutral-800 p-4">
                  <RocketIcon className="mx-auto block" />

                  <h3 className="font-semibold">Launch Payload Mass</h3>
                  <CardDescription>
                    {dragon.launch_payload_mass.kg.toLocaleString()} kg
                  </CardDescription>
                  <CardDescription>
                    {dragon.launch_payload_mass.lb.toLocaleString()} lb
                  </CardDescription>
                </li>
              </ul>

              <article className="mt-8">
                <CardTitle>Heat Shield</CardTitle>

                <div className="mt-6 space-y-2 rounded-lg border border-neutral-800 p-4">
                  <CardDescription>
                    <span className="text-whit font-semibold">Material:</span>{" "}
                    {dragon.heat_shield.material}
                  </CardDescription>

                  <CardDescription>
                    <span className="text-whit font-semibold">Size:</span>{" "}
                    {dragon.heat_shield.size_meters} m
                  </CardDescription>

                  <CardDescription>
                    <span className="text-whit font-semibold">
                      Temperature:
                    </span>{" "}
                    {dragon.heat_shield.temp_degrees} degrees
                  </CardDescription>

                  <CardDescription>
                    <span className="text-whit font-semibold">
                      Dev partner:
                    </span>{" "}
                    {dragon.heat_shield.dev_partner}
                  </CardDescription>
                </div>
              </article>
            </article>
          </div>
        </div>
      ) : (
        <p className="text-center text-sm text-neutral-600">
          Loading dragon details...
        </p>
      )}
    </div>
  );
}
