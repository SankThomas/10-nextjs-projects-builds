import { Loader } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="py-20">
      <Loader className="mx-auto block size-12 animate-spin" />
    </div>
  );
}
