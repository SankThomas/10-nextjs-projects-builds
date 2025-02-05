import BackButton from "@/components/backbutton";
import { Button } from "@/components/ui/button";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { getDataFromAPI } from "@/lib/utils";
import { YoutubeIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Team({ params }) {
  const team = await params;

  const teams = await getDataFromAPI(
    `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${team.name}`,
  );

  return (
    <div className="container mx-auto px-6 py-20">
      <BackButton />

      <div className="mt-16">
        {teams ? (
          teams.teams.map((singleTeam) => (
            <div key={singleTeam.idTeam} className="space-y-8">
              <article
                style={{
                  background: `url(${singleTeam.strFanart1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: 9,
                }}
                className="h-[400px] w-auto lg:h-[500px]"
              >
                <div className="flex h-[400px] w-auto flex-col items-center justify-center space-y-4 rounded-lg bg-black/60 p-6 text-center lg:h-[500px] lg:px-12">
                  <div>
                    <h1 className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                      {singleTeam.strTeam}
                    </h1>
                    <div className="mx-auto mb-4 h-1 w-20 bg-emerald-400"></div>
                    <CardDescription className="text-neutral-200">
                      {singleTeam.strTeamAlternate}
                    </CardDescription>
                  </div>

                  <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
                    {singleTeam.strWebsite && (
                      <li>
                        <Button asChild variant="secondary">
                          <a
                            href={`https://${singleTeam.strWebsite}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GlobeIcon />
                          </a>
                        </Button>
                      </li>
                    )}
                    {singleTeam.strRSS && (
                      <li>
                        <Button asChild variant="secondary">
                          <a
                            href={singleTeam.strRSS}
                            target="_blank"
                            rel="noreferrer"
                          >
                            RSS
                          </a>
                        </Button>
                      </li>
                    )}
                    {singleTeam.strFacebook && (
                      <li>
                        <Button asChild variant="secondary">
                          <a
                            href={`https://${singleTeam.strFacebook}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FacebookIcon color="#171717" />
                          </a>
                        </Button>
                      </li>
                    )}
                    {singleTeam.strInstagram && (
                      <li>
                        <Button asChild variant="secondary">
                          <a
                            href={`https://${singleTeam.strInstagram}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <InstagramIcon />
                          </a>
                        </Button>
                      </li>
                    )}
                    {singleTeam.strTwitter && (
                      <li>
                        <Button asChild variant="secondary">
                          <a
                            href={`https://${singleTeam.strTwitter}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <TwitterIcon />
                          </a>
                        </Button>
                      </li>
                    )}
                    {singleTeam.strYoutube && (
                      <li>
                        <Button asChild variant="secondary">
                          <a
                            href={`https://${singleTeam.strYoutube}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <YoutubeIcon color="#171717" />
                          </a>
                        </Button>
                      </li>
                    )}
                  </ul>

                  <div>
                    {singleTeam.strLeague && (
                      <h2 className="mb-4 font-bold">Leagues</h2>
                    )}
                    <ul className="flex flex-wrap items-center justify-center gap-4">
                      {singleTeam.strLeague && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague}
                          </Button>
                        </li>
                      )}

                      {singleTeam.strLeague2 && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague2}
                          </Button>
                        </li>
                      )}

                      {singleTeam.strLeague3 && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague3}
                          </Button>
                        </li>
                      )}

                      {singleTeam.strLeague4 && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague4}
                          </Button>
                        </li>
                      )}

                      {singleTeam.strLeague5 && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague5}
                          </Button>
                        </li>
                      )}

                      {singleTeam.strLeague6 && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague6}
                          </Button>
                        </li>
                      )}

                      {singleTeam.strLeague7 && (
                        <li>
                          <Button variant="secondary">
                            {singleTeam.strLeague7}
                          </Button>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    {singleTeam.strCountry && (
                      <CardDescription className="text-neutral-200">
                        {singleTeam.strCountry}
                      </CardDescription>
                    )}
                  </div>
                </div>
              </article>

              <CardDescription className="lg:text-base lg:leading-7">
                {singleTeam.strDescriptionEN}
              </CardDescription>

              {singleTeam.strFanart1 ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {singleTeam.strFanart1 && (
                    <Image
                      src={singleTeam.strFanart1}
                      width={600}
                      height={400}
                      alt={singleTeam.strTeam}
                      className="w-full rounded-lg md:w-[400px]"
                    />
                  )}

                  {singleTeam.strFanart2 && (
                    <Image
                      src={singleTeam.strFanart2}
                      width={600}
                      height={400}
                      alt={singleTeam.strTeam}
                      className="w-full rounded-lg md:w-[400px]"
                    />
                  )}

                  {singleTeam.strFanart3 && (
                    <Image
                      src={singleTeam.strFanart3}
                      width={600}
                      height={400}
                      alt={singleTeam.strTeam}
                      className="w-full rounded-lg md:w-[400px]"
                    />
                  )}

                  {singleTeam.strFanart4 && (
                    <Image
                      src={singleTeam.strFanart4}
                      width={600}
                      height={400}
                      alt={singleTeam.strTeam}
                      className="w-full rounded-lg md:w-[400px]"
                    />
                  )}

                  {singleTeam.strBanner && (
                    <Image
                      src={singleTeam.strBanner}
                      width={600}
                      height={400}
                      alt={singleTeam.strTeam}
                      className="w-full rounded-lg md:w-[400px]"
                    />
                  )}
                </div>
              ) : null}

              {singleTeam.strColour1 && (
                <div>
                  <CardTitle className="mb-2 text-lg">Kit Colours</CardTitle>
                  <div className="flex flex-wrap items-center justify-start gap-4">
                    {singleTeam.strColour1 && (
                      <article
                        style={{ background: singleTeam.strColour1 }}
                        className="flex h-20 w-20 items-center justify-center rounded-lg text-center font-bold"
                      >
                        {singleTeam.strColour1}
                      </article>
                    )}

                    {singleTeam.strColour2 && (
                      <article
                        style={{ background: singleTeam.strColour2 }}
                        className="flex h-20 w-20 items-center justify-center rounded-lg text-center font-bold"
                      >
                        {singleTeam.strColour2}
                      </article>
                    )}

                    {singleTeam.strColour3 && (
                      <article
                        style={{ background: singleTeam.strColour3 }}
                        className="flex h-20 w-20 items-center justify-center rounded-lg text-center font-bold"
                      >
                        {singleTeam.strColour3}
                      </article>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center">
            <p className="mb-4 text-sm text-neutral-600">
              There seems to be a problem loading the team details
            </p>
            <BackButton />
          </div>
        )}
      </div>
    </div>
  );
}
