"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button variant="default" onClick={() => router.back()}>
      &larr; Back
    </Button>
  );
}
