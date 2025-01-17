"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Products from "@/components/products";

export default function DashboardPage() {
  const { user } = useKindeBrowserClient();

  return (
    <div>
      <header className="flex items-center justify-between p-4">
        {user ? (
          <div>
            <h2 className="text-lg font-bold">
              {user.given_name} {user.family_name}
            </h2>
            <p className="text-sm text-neutral-600">{user.email}</p>
          </div>
        ) : (
          <LoginLink>Log in to continue</LoginLink>
        )}

        <div>
          <Button asChild variant="default">
            <LogoutLink>Log out</LogoutLink>
          </Button>
        </div>
      </header>

      <Products />
    </div>
  );
}
