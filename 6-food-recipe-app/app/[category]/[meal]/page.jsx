"use client";

import { useParams } from "next/navigation";
import React from "react";
import { useFetch } from "../../../../hooks/useFetch";
import Link from "next/link";

export default function MealPage() {
  const params = useParams();
  console.log(params);

  const meal = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.meal}`,
  );

  return (
    <div className="container mx-auto px-4 py-20">
      <Link
        href={`/${params.category}`}
        className="mb-8 inline-block rounded bg-neutral-800 px-4 py-2 font-semibold text-white transition hover:bg-neutral-700"
      >
        &larr; Back
      </Link>

      {meal ? (
        <div>
          {meal.meals.map((meal) => (
            <div key={meal.idMeal}>
              <article
                style={{
                  background: `url(${meal.strMealThumb})`,
                  backgroundPosition: "center",
                  borderRadius: 10,
                  height: 400,
                }}
              >
                <div className="flex h-[400px] flex-col flex-wrap items-center justify-center bg-black/50 text-center">
                  <h1 className="mb-8 text-center text-4xl font-bold capitalize lg:text-5xl">
                    {meal.strMeal}
                  </h1>

                  <ul className="flex flex-wrap items-center justify-center gap-4">
                    <Link href={`/${meal.strCategory}`}>
                      <li className="cursor-pointer rounded bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/75">
                        {meal.strCategory}
                      </li>
                    </Link>
                    <li className="cursor-pointer rounded bg-white px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/75">
                      {meal.strArea}
                    </li>
                  </ul>
                </div>
              </article>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <article>
                  <h2 className="my-4 text-lg font-bold">Ingredients</h2>

                  <ol className="list-decimal pl-7 text-sm leading-7 text-neutral-400">
                    {meal.strMeasure1 && meal.strIngredient1 ? (
                      <li>
                        {meal.strMeasure1} {meal.strIngredient1}
                      </li>
                    ) : null}
                    {meal.strMeasure2 && meal.strIngredient2 ? (
                      <li>
                        {meal.strMeasure2} {meal.strIngredient2}
                      </li>
                    ) : null}
                    {meal.strMeasure3 && meal.strIngredient3 ? (
                      <li>
                        {meal.strMeasure3} {meal.strIngredient3}
                      </li>
                    ) : null}
                    {meal.strMeasure4 && meal.strIngredient4 ? (
                      <li>
                        {meal.strMeasure4} {meal.strIngredient4}
                      </li>
                    ) : null}
                    {meal.strMeasure5 && meal.strIngredient5 ? (
                      <li>
                        {meal.strMeasure5} {meal.strIngredient5}
                      </li>
                    ) : null}
                    {meal.strMeasure6 && meal.strIngredient6 ? (
                      <li>
                        {meal.strMeasure6} {meal.strIngredient6}
                      </li>
                    ) : null}
                    {meal.strMeasure7 && meal.strIngredient7 ? (
                      <li>
                        {meal.strMeasure7} {meal.strIngredient7}
                      </li>
                    ) : null}
                    {meal.strMeasure8 && meal.strIngredient8 ? (
                      <li>
                        {meal.strMeasure8} {meal.strIngredient8}
                      </li>
                    ) : null}
                    {meal.strMeasure9 && meal.strIngredient9 ? (
                      <li>
                        {meal.strMeasure9} {meal.strIngredient9}
                      </li>
                    ) : null}
                    {meal.strMeasure10 && meal.strIngredient10 ? (
                      <li>
                        {meal.strMeasure10} {meal.strIngredient10}
                      </li>
                    ) : null}
                    {meal.strMeasure11 && meal.strIngredient11 ? (
                      <li>
                        {meal.strMeasure11} {meal.strIngredient11}
                      </li>
                    ) : null}
                    {meal.strMeasure12 && meal.strIngredient12 ? (
                      <li>
                        {meal.strMeasure12} {meal.strIngredient12}
                      </li>
                    ) : null}
                    {meal.strMeasure13 && meal.strIngredient13 ? (
                      <li>
                        {meal.strMeasure13} {meal.strIngredient13}
                      </li>
                    ) : null}
                    {meal.strMeasure14 && meal.strIngredient14 ? (
                      <li>
                        {meal.strMeasure14} {meal.strIngredient14}
                      </li>
                    ) : null}
                    {meal.strMeasure15 && meal.strIngredient15 ? (
                      <li>
                        {meal.strMeasure15} {meal.strIngredient15}
                      </li>
                    ) : null}
                    {meal.strMeasure16 && meal.strIngredient16 ? (
                      <li>
                        {meal.strMeasure16} {meal.strIngredient16}
                      </li>
                    ) : null}
                    {meal.strMeasure17 && meal.strIngredient17 ? (
                      <li>
                        {meal.strMeasure17} {meal.strIngredient17}
                      </li>
                    ) : null}
                    {meal.strMeasure18 && meal.strIngredient18 ? (
                      <li>
                        {meal.strMeasure18} {meal.strIngredient18}
                      </li>
                    ) : null}
                    {meal.strMeasure19 && meal.strIngredient19 ? (
                      <li>
                        {meal.strMeasure19} {meal.strIngredient19}
                      </li>
                    ) : null}
                    {meal.strMeasure20 && meal.strIngredient20 ? (
                      <li>
                        {meal.strMeasure20} {meal.strIngredient20}
                      </li>
                    ) : null}
                  </ol>
                </article>

                <article className="lg:col-span-2">
                  <h2 className="my-4 text-lg font-bold">How to prepare:</h2>
                  <p className="text-sm leading-7 text-neutral-400">
                    {meal.strInstructions}
                  </p>
                </article>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-neutral-600">
          Loading meal data...
        </p>
      )}
    </div>
  );
}
