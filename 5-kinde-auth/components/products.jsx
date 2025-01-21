"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {products ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <article
              key={item.id}
              className="rounded-lg border border-neutral-800 p-4 transition hover:bg-neutral-800"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="mb-4 h-[250px] w-full object-contain"
              />
              <h2 className="mb-2 text-lg font-bold">{item.title}</h2>
              <p className="text-sm leading-6 text-neutral-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-neutral-600">
          Loading products...
        </p>
      )}
    </div>
  );
}
