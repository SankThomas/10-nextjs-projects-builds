import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Country({ params }) {
  const code = await params;

  async function getCountry() {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${code.cca}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const country = await getCountry();

  return (
    <div className="container mx-auto px-6 py-20">
      {country ? (
        <div className="space-y-6">
          <Button asChild variant="default" size="sm" className="bg-black">
            <Link href="/">&larr; Back</Link>
          </Button>

          {country.map((c) => (
            <article
              key={c.name.official}
              className="grid gap-8 space-y-2 md:grid-cols-2"
            >
              <Image
                src={c.flags.svg}
                alt={c.name.official}
                width={1920}
                height={1080}
                className="rounded-lg"
              />
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold">{c.name.common}</h1>
                <p className="text-sm text-neutral-500">
                  <strong>Official name:</strong>
                  {c.name.official}
                </p>

                <div>
                  <ul className="grid gap-2 text-sm text-neutral-500 md:grid-cols-2">
                    <li>
                      <strong>Capital:</strong> {c.capital[0]}
                    </li>
                    <li>
                      <strong>Population:</strong>{" "}
                      {c.population.toLocaleString()} people
                    </li>
                    {c.region && (
                      <li>
                        <strong>Region:</strong> {c.region}
                      </li>
                    )}
                    {c.subregion && (
                      <li>
                        <strong>Subregion:</strong> {c.subregion}
                      </li>
                    )}
                    <li className="capitalize">
                      <strong>Driving:</strong> {c.car.side} hand drive
                    </li>

                    <li>
                      <strong>Languages:</strong>

                      <div className="flex flex-wrap items-center justify-start gap-2">
                        {Object.values(c.languages).map((lang, index) => (
                          <div
                            key={index}
                            className="mt-2 rounded border border-neutral-700 bg-neutral-800 px-2 py-1 text-sm"
                          >
                            {lang}
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">
                    {Object.values(c.currencies).length === 1
                      ? "Currency"
                      : "Currencies"}
                  </h3>

                  <ul className="flex flex-wrap items-center justify-start gap-2">
                    {Object.values(c.currencies).map((currency, index) => (
                      <li
                        key={index}
                        className="rounded border border-neutral-800 bg-neutral-800 px-4 py-2 text-xs text-neutral-400"
                      >
                        {currency.name}, {currency.symbol}
                      </li>
                    ))}
                  </ul>
                </div>

                {c.borders ? (
                  <div>
                    <h3 className="mb-2 font-bold text-white">
                      Border countries
                    </h3>
                    <ul className="flex flex-wrap items-center justify-start gap-2">
                      {c.borders.map((border, index) => (
                        <li key={index}>
                          <Link
                            href={`/${border}`}
                            className="rounded bg-neutral-800 px-2 py-1 text-sm font-semibold transition hover:bg-neutral-700"
                          >
                            {border}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm text-neutral-400">
                    No border countries
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-sm">Loading country details...</p>
      )}
    </div>
  );
}
