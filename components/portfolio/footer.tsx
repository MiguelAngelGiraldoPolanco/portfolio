"use client";


export function Footer() {
  return (
    <footer>
      <hr className="border-t border-border mb-6" />
      <p className="text-sm text-muted-foreground">
        &copy; Miguel Angel Giraldo {new Date().getFullYear()}
      </p>
    </footer>
  );
}
