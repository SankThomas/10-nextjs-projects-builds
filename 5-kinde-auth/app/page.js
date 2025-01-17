"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center px-4">
      <article className="space-x-4">
        <Button asChild variant="default">
          <LoginLink>Log in</LoginLink>
        </Button>
        <Button asChild variant="secondary">
          <RegisterLink>Sign up</RegisterLink>
        </Button>
      </article>
    </div>
  );
}
