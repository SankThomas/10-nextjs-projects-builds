import Loader from "@/components/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDataFromAPI } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default async function Crew() {
  const members = await getDataFromAPI("https://api.spacexdata.com/v4/crew");

  return (
    <div>
      <h1 className="mb-8 text-center text-4xl font-bold">The Crew</h1>
      {members ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card key={member.id}>
              <CardHeader>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={800}
                  className="mb-4 h-[800px] w-full rounded-lg object-cover"
                />
              </CardHeader>

              <CardContent className="space-y-4">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.agency}</CardDescription>
                {member.status === "active" ? (
                  <CardDescription className="inline-block rounded-lg bg-emerald-400/25 px-2 text-emerald-400">
                    Active
                  </CardDescription>
                ) : (
                  <CardDescription className="inline-block rounded-lg bg-rose-400/25 px-2 text-rose-400">
                    Inactive
                  </CardDescription>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
