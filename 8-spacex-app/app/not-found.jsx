import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg">
      <article className="space-y-6 text-center">
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-sm leading-6 text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          beatae obcaecati maiores laudantium, possimus voluptas asperiores.
          Enim harum aut nulla.
        </p>

        <Link
          href="/"
          className="block text-white/75 transition hover:text-white hover:underline"
        >
          Back to homepage
        </Link>
      </article>
    </div>
  );
}
