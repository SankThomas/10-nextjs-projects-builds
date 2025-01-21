"use client";

import Link from "next/link";
import { useFetch } from "../../hooks/useFetch";
import Image from "next/image";

export default function Home() {
  const data = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php",
  );

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="mb-8 text-center text-4xl font-bold lg:text-5xl">
        Food Recipe App
      </h1>

      {data ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.categories.map((category) => (
            <Link
              href={`/${category.strCategory}`}
              key={category.idCategory}
              className="rounded-lg border border-neutral-800 p-4 transition hover:bg-neutral-900"
            >
              <Image
                src={category.strCategoryThumb}
                width={800}
                height={600}
                alt={category.strCategory}
                className="rounded-lg"
                priority
              />

              <h2 className="my-4 text-lg font-bold">{category.strCategory}</h2>
              <p className="text-sm text-neutral-400">
                {`${category.strCategoryDescription.substring(0, 200)}...`}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-neutral-600">
          Loading category data...
        </p>
      )}
    </div>
  );
}
