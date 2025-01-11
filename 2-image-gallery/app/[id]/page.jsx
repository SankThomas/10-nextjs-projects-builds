import { Twitter } from "lucide-react";
import { Globe } from "lucide-react";
import { Mail } from "lucide-react";
import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

export default async function SinglePhoto({ params }) {
  const id = await params;

  async function getPhoto() {
    const res = await fetch(
      `https://api.unsplash.com/photos/${id.id}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
    );

    if (!res.ok) throw new Error("Failed to get the photo");

    return res.json();
  }

  const photo = await getPhoto();

  return (
    <div>
      {!photo ? (
        <p>Getting photo...</p>
      ) : (
        <div className="mx-auto max-w-4xl px-4 py-32">
          <Link
            href="/"
            className="mb-6 inline-block rounded bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            &larr; Back
          </Link>

          <div
            style={{ background: `${photo.color}40` }}
            className="group grid gap-8 rounded-lg p-4 md:grid-cols-2"
          >
            <article>
              <Image
                src={photo.urls.regular}
                alt={photo.alt_description}
                width={photo.width}
                height={photo.height}
                className="rounded-lg grayscale transition group-hover:grayscale-0"
              />
            </article>

            <article className="space-y-8">
              {photo.user.name ? (
                <p>
                  {photo.user.name}{" "}
                  {photo.user.location
                    ? `based in ${photo.user.location}`
                    : null}
                </p>
              ) : null}

              {photo.description ? (
                <p className="font-normal">
                  <span className="block font-bold">Photo Descritpion</span>
                  {photo.description}
                </p>
              ) : null}

              <ul className="flex flex-wrap items-center justify-start gap-4">
                {photo.user.social.instagram_username ? (
                  <li>
                    <a
                      href={`https://instagram.com/${photo.user.social.instagram_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 transition hover:text-white"
                    >
                      <Instagram />
                    </a>
                  </li>
                ) : null}

                {photo.user.social.portfolio_url ? (
                  <li>
                    <a
                      href={photo.user.social.portfolio_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 transition hover:text-white"
                    >
                      <Globe />
                    </a>
                  </li>
                ) : null}

                {photo.user.social.twitter_username ? (
                  <li>
                    <a
                      href={`https://x.com/${photo.user.social.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 transition hover:text-white"
                    >
                      <Twitter />
                    </a>
                  </li>
                ) : null}

                {photo.user.social.paypal_email ? (
                  <li>
                    <a
                      href={`mailto:${photo.user.social.paypal_email}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-400 transition hover:text-white"
                    >
                      <Mail />
                    </a>
                  </li>
                ) : null}
              </ul>

              {photo.for_hire && (
                <button className="rounded bg-blue-500 px-6 py-2 font-semibold transition hover:bg-blue-600">
                  Available for Hire
                </button>
              )}

              <div className="mt-8 flex items-center justify-start gap-4">
                <Image
                  src={photo.user.profile_image.large}
                  alt={photo.user.username}
                  height={80}
                  width={80}
                  className="rounded-full"
                />

                <div>
                  <h2 className="font-bold">{photo.user.name}</h2>
                  <p>
                    <strong>Last updated: </strong>{" "}
                    {format(new Date(photo.updated_at), "do MMMM yyyy")}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
