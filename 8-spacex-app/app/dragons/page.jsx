import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getDataFromAPI } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Dragons() {
  const dragons = await getDataFromAPI("https://api.spacexdata.com/v4/dragons");

  return (
    <div>
      {dragons ? (
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="mb-8 text-center text-4xl font-bold">Dragons</h1>

          <div className="grid gap-8">
            {dragons.map((dragon) => (
              <Link href={`/dragons/${dragon.id}`} key={dragon.id}>
                <Card className="grid gap-8 p-4 md:grid-cols-2">
                  <Image
                    src={dragon.flickr_images[0]}
                    width={1920}
                    height={1080}
                    alt={dragon.name}
                    className="rounded-lg"
                  />

                  <CardContent>
                    <CardTitle className="mb-8 text-3xl">
                      {dragon.name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6">
                      {dragon.description}
                    </CardDescription>

                    <Button variant="secondary" className="mt-8">
                      More details
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
