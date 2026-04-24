import { Facebook, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/MiguelAngelGiraldoPolanco",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/miguel-angel-giraldo-100472160/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/miguel.a.giraldo.758",
    icon: Facebook,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Miguel Ángel Giraldo. Software & AI Engineer.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
