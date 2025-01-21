"use client";

import React from "react";
import { useFetch } from "../../../hooks/useFetch";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Category() {
  const params = useParams();

  const category = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`,
  );

  return (
    <div className="container mx-auto px-4 py-20">
      <Link
        href="/"
        className="mb-8 inline-block rounded bg-neutral-800 px-4 py-2 font-semibold text-white transition hover:bg-neutral-700"
      >
        &larr; Back
      </Link>

      <h1 className="mb-8 text-center text-4xl font-bold capitalize lg:text-5xl">
        {params.category}
      </h1>

      {category ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category.meals.map((meal) => (
            <Link
              href={`/${params.category}/${meal.strMeal}`}
              key={meal.idMeal}
              className="rounded-lg border border-neutral-800 p-4 transition hover:bg-neutral-800"
            >
              <Image
                src={meal.strMealThumb}
                width={800}
                height={600}
                alt={meal.strMeal}
                className="rounded-lg"
              />
              <h2 className="my-4 text-lg font-bold">{meal.strMeal}</h2>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-neutral-600">
          Loading meals in the category...
        </p>
      )}
    </div>
  );
}
