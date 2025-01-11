import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getPhotos() {
  const res = await fetch(
    `https://api.unsplash.com/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
  );

  if (!res.ok) throw new Error("Failed to fetch photos");

  return res.json();
}

export default async function Home() {
  const photos = await getPhotos();

  return (
    <div>
      {!photos ? (
        <p>Getting photos...</p>
      ) : (
        <div className="container mx-auto px-4 py-32">
          <h1 className="text-tcenter mb-8 text-4xl font-bold">
            Unsplash Photos
          </h1>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {photos?.map((photo) => (
              <Link
                key={photo.id}
                href={`/${photo.id}`}
                className="rounded-lg border border-neutral-900 p-4 transition hover:border-neutral-800 hover:bg-neutral-900"
              >
                <article>
                  <Image
                    src={photo.urls.regular}
                    alt={photo.alt_description}
                    width={photo.width}
                    height={photo.height}
                    className="h-[300px] w-full rounded-lg object-cover object-top"
                  />
                  <h2 className="mt-8 flex items-center justify-start gap-4 font-bold">
                    <Image
                      src={photo.user.profile_image.large}
                      alt={photo.user.username}
                      height={80}
                      width={80}
                      className="rounded-full"
                    />
                    {photo.user.name}
                  </h2>
                </article>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
