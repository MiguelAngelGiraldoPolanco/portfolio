"use client";
import Link from "next/link";

export function Nav() {
    return (

        <nav className="mb-20 md:mb-28">
            <hr className="border-t border-border mb-6" />
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm md:text-base">
                <li>
                    <Link
                        href="#projects"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://www.linkedin.com/in/miguel-angel-giraldo-100472160/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link
                        href="https://github.com/MiguelAngelGiraldoPolanco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link
                        href="mailto:mgiraldopolanco@gmial.com"
                        className="text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                        Email
                    </Link>
                </li>
            </ul>
            <hr className="border-t border-border mt-6" />
        </nav>

    )
}