import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

async function getPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");

  if (!res.ok) throw new Error("Failed to fetch pokemon");

  return res.json();
}

export default async function Home() {
  const pokemon = await getPokemon();

  return (
    <div className="container mx-auto px-6 py-32">
      {pokemon ? (
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {pokemon.results.map((poke) => (
            <Link href={`/${poke.name}`} key={poke.name}>
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize">{poke.name}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-neutral-600">Loading pokemon...</p>
      )}
    </div>
  );
}
