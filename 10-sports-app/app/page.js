import { getDataFromAPI } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const sports = await getDataFromAPI(
    "https://www.thesportsdb.com/api/v1/json/3/all_leagues.php",
  );

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold">Sports Leagues</h1>
        <div className="mx-auto h-1 w-20 bg-emerald-400"></div>
        <p className="text-sm text-neutral-600">
          This app uses TheSportsDB API which returns 50 leagues on the free
          tier.
        </p>
      </div>

      <div className="mt-16">
        {sports ? (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sports.leagues.map((sport) => (
              <Link
                href={`/${sport.strLeague}`}
                key={sport.idLeague}
                className="group rounded-lg border border-neutral-900 p-6 transition hover:border-neutral-800 hover:bg-neutral-900"
              >
                <article>
                  <h2 className="text-lg font-bold">{sport.strLeague}</h2>
                  <p className="mt-4 inline-block rounded-full border border-neutral-800 bg-neutral-900 px-2 py-1 text-xs text-neutral-600 group-hover:border-neutral-700 group-hover:bg-neutral-800">
                    {sport.strSport}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-sm">Loading league details...</p>
        )}
      </div>
    </div>
  );
}
