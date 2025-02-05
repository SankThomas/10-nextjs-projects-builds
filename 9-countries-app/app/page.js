import React from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

async function getCountries() {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,subregion,cca2",
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const countries = await getCountries();

  return (
    <div className="container px-6 py-20">
      <h1 className="mb-12 text-center text-3xl font-bold text-white">
        Where is Carmen Sandiego
      </h1>
      {countries ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <Link href={`/${country.cca2}`} key={country.name.common}>
              <Card>
                <CardHeader>
                  <Image
                    src={country.flags.svg}
                    alt={country.name.common}
                    width={1920}
                    height={1080}
                    className="h-[300px] w-full rounded-lg object-cover"
                  />
                </CardHeader>

                <CardContent className="space-y-2">
                  <CardTitle>{country.name.common}</CardTitle>
                  <CardDescription>
                    <strong>Region:</strong> {country.region}
                  </CardDescription>
                  <CardDescription>
                    <strong>Subregion:</strong> {country.subregion}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-neutal-600 mt-10 text-center text-sm">
          Loading countries...
        </p>
      )}
    </div>
  );
}
