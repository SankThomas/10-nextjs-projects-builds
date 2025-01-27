import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function Loader() {
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <div className="grid gap-8 rounded-lg border border-neutral-800 p-4 md:grid-cols-2">
        <Skeleton className="h-96 bg-neutral-800" />

        <div className="space-y-4">
          <Skeleton className="mb-8 h-12 w-9/12 bg-neutral-800" />
          <Skeleton className="h-4 w-full bg-neutral-800" />
          <Skeleton className="h-4 w-full bg-neutral-800" />
          <Skeleton className="h-4 w-full bg-neutral-800" />
          <Skeleton className="!mt-12 h-12 w-32 bg-neutral-800" />
        </div>
      </div>

      <div className="grid gap-8 rounded-lg border border-neutral-800 p-4 md:grid-cols-2">
        <Skeleton className="h-96 bg-neutral-800" />

        <div className="space-y-4">
          <Skeleton className="mb-8 h-12 w-9/12 bg-neutral-800" />
          <Skeleton className="h-4 w-full bg-neutral-800" />
          <Skeleton className="h-4 w-full bg-neutral-800" />
          <Skeleton className="h-4 w-full bg-neutral-800" />
          <Skeleton className="!mt-12 h-12 w-32 bg-neutral-800" />
        </div>
      </div>
    </div>
  );
}
