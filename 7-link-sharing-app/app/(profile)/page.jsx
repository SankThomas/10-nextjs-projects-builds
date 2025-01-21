import CreateLinks from "@/components/craetelinks";
import PreviewLinks from "@/components/previewlinks";
import React from "react";

export default function Home() {
  return (
    <div>
      <section className="container mx-auto">
        <div className="grid gap-8 pb-8 lg:grid-cols-3 lg:items-start">
          <section className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 lg:p-12">
            <PreviewLinks />
          </section>

          <section className="rounded-lg border border-neutral-800 bg-neutral-900 p-6 lg:col-span-2 lg:p-12">
            <CreateLinks />
          </section>
        </div>
      </section>
    </div>
  );
}
