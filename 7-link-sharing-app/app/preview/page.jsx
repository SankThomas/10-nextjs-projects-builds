import PreviewLinks from "@/components/previewlinks";
import PreviewNav from "@/components/previewnav";
import React from "react";

export default function Preview() {
  return (
    <div className="container mx-auto pb-20">
      <PreviewNav />
      <PreviewLinks />
    </div>
  );
}
