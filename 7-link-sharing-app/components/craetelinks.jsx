"use client";

import { StateContext } from "@/context/state";
import React, { useContext } from "react";
import { Button } from "./ui/button";

export default function CreateLinks() {
  const {
    linkName,
    handleLinkName,
    linkUrl,
    handleLinkUrl,
    handleSubmit,
    platforms,
  } = useContext(StateContext);

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-white lg:text-4xl">
        Prepare your links
      </h1>

      <form onSubmit={handleSubmit} className="grid gap-8">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-800 bg-neutral-900 p-6"
          >
            <div>
              <label htmlFor="link-name">Platform</label>
              <input
                type="text"
                name="link-name"
                id="link-name"
                placeholder="YouTube"
                required
                value={linkName}
                onChange={handleLinkName}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="link-url">Enter URL</label>
              <input
                type="text"
                name="link-url"
                id="link-url"
                placeholder={`e.g https://${platform.title.toLowerCase()}.com/username`}
                required
                value={linkUrl}
                onChange={handleLinkUrl}
              />
            </div>
          </div>
        ))}

        <Button variant="blue" onClick={handleSubmit}>
          Add link
        </Button>
      </form>
    </div>
  );
}
