"use client";

import { useEffect, useState } from "react";

export function Privacy() {
  const [open, setOpen] = useState(false);

  // Cerrar con Escape y bloquear el scroll del fondo mientras el modal está abierto.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline transition-colors duration-200"
      >
        Privacy
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Fondo */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Contenido */}
          <div className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-lg border border-border bg-background p-6 md:p-8 shadow-lg">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2
                id="privacy-title"
                className="font-serif text-2xl md:text-3xl tracking-tight text-foreground"
              >
                Privacy
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close privacy dialog"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-xl leading-none"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-sm md:text-base text-foreground leading-relaxed">
              <p>
                This website is a personal portfolio. It exists only to show who I am
                and what I build. It does not collect, store, sell or share any
                personal data.
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <span className="text-foreground">No analytics.</span> There are no
                  analytics or tracking scripts of any kind.
                </li>
                <li>
                  <span className="text-foreground">No cookies.</span> The site does
                  not set cookies or use local storage to track you.
                </li>
                <li>
                  <span className="text-foreground">No accounts.</span> There is no
                  sign-up, login or form that gathers your information.
                </li>
                <li>
                  <span className="text-foreground">No third-party profiling.</span>{" "}
                  Your visit is not used to build any profile or audience.
                </li>
              </ul>

              <p className="text-muted-foreground">
                The only way to reach me is if you choose to: clicking my email or
                social links opens your own apps. Nothing is sent unless you send it
                yourself.
              </p>

              <p className="text-muted-foreground">
                Questions about privacy? Email me at{" "}
                <a
                  href="mailto:miguelgiraldo1116@gmail.com"
                  className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors duration-200"
                >
                  miguelgiraldo1116@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
