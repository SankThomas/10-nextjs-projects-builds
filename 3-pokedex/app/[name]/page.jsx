"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Chart from "@/components/chart";

export default function SinglePokemon() {
  const [pokemonData, setPokemonData] = useState();
  const params = useParams();

  console.log(params);

  async function getPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const data = await res.json();
    setPokemonData(data);
  }

  useEffect(() => {
    getPokemon();
  }, [params]);

  return (
    <div>
      {pokemonData ? (
        <div className="container mx-auto grid gap-8 px-6 py-32 lg:grid-cols-2 lg:items-center">
          <article>
            <Button asChild>
              <Link href="/">&larr; Back</Link>
            </Button>

            <h1 className="mt-8 text-4xl font-bold capitalize">
              {pokemonData.name}
            </h1>

            {pokemonData.sprites && (
              <Image
                src={pokemonData.sprites.other.home.front_shiny}
                alt={pokemonData.name}
                width={400}
                height={400}
              />
            )}

            {pokemonData.types && (
              <div>
                <h2 className="mt-6 font-bold">Pokemon Type</h2>
                <ul className="mt-8 flex flex-wrap items-center justify-start gap-4">
                  {pokemonData.types.map((t, index) => (
                    <li key={index}>
                      <Button variant="default">{t.type.name}</Button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          <article>
            <Chart pokemonData={pokemonData} />
          </article>
        </div>
      ) : (
        <p className="mt-8 text-center text-neutral-600">
          Loading pokemon details...
        </p>
      )}
    </div>
  );
}
