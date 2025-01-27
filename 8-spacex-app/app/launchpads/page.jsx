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

export default async function Launchpads() {
  const launchpads = await getDataFromAPI(
    "https://api.spacexdata.com/v4/launchpads",
  );

  return (
    <div>
      {launchpads ? (
        <div className="mx-auto max-w-7xl space-y-6">
          <h1 className="mb-8 text-center text-4xl font-bold">Lauchpads</h1>

          <div className="grid gap-8">
            {launchpads.map((launchpad) => (
              <Link href={`/launchpads/${launchpad.id}`} key={launchpad.id}>
                <Card className="grid gap-8 p-4 md:grid-cols-2">
                  <Image
                    src={launchpad.images.large[0]}
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                    alt={launchpad.name}
                  />

                  <CardContent>
                    <CardTitle className="mb-8 text-3xl">
                      {launchpad.full_name}
                    </CardTitle>
                    <CardDescription className="text-sm leading-6">
                      {launchpad.details}
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
        <p className="text-center text-sm text-neutral-600">
          Loading launchpads...
        </p>
      )}
    </div>
  );
}
