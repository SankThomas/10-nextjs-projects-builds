import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function PreviewNav() {
  return (
    <header className="container mx-auto my-8 rounded-lg border border-neutral-800 bg-neutral-900">
      <div className="flex flex-wrap items-center justify-between p-4">
        <div>
          <Button asChild variant="link">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-white"
            >
              Back to editor
            </Link>
          </Button>
        </div>

        <Button variant="blue">Share Link</Button>
      </div>
    </header>
  );
}
