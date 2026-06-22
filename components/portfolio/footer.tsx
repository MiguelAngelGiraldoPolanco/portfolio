"use client";

import { Privacy } from "@/components/portfolio/privacy";

export function Footer() {
  return (
    <footer>
      <hr className="border-t border-border mb-6" />
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p className="text-sm text-muted-foreground">
          &copy; Miguel Angel Giraldo {new Date().getFullYear()}
        </p>
        <Privacy />
      </div>
    </footer>
  );
}
