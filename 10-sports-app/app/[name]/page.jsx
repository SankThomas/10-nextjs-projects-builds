import { Button } from "@/components/ui/button";
import { getDataFromAPI } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function League({ params }) {
  const leagueName = await params;

  const teams = await getDataFromAPI(
    `https://thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${leagueName.name}`,
  );

  return (
    <div className="px-6 py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold lg:text-5xl">
          {leagueName.name.split("%20").join(" ")}
        </h1>
        <div className="mx-auto h-1 w-20 bg-emerald-400"></div>
      </div>

      <Button asChild variant="default">
        <Link href="/">&larr; Back</Link>
      </Button>

      <div className="mt-16">
        {teams.teams ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teams.teams.map((team) => (
              <Link
                href={`/teams/${team.strTeam}`}
                key={team.idTeam}
                className="rounded-lg border border-neutral-900 p-6 transition hover:border-neutral-800 hover:bg-neutral-900"
              >
                <article>
                  <Image
                    src={team.strBadge}
                    width={200}
                    height={150}
                    alt={team.strTeam}
                    className="mx-auto block"
                  />
                  <h2 className="mt-4 text-center font-bold">{team.strTeam}</h2>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm text-neutral-600">
              Working...seems like there are no teams in this league
            </p>

            <Link
              href="/"
              className="mt-6 inline-block rounded bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/75"
            >
              &larr; Search in another league
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
