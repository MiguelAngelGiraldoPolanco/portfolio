import Link from "next/link";

const projects = [
  {
    title: "Sempiterno",
    description: "AI-powered platform for eternal digital preservation and emotional companionship.",
    link: "#",
  },
  {
    title: "Neural Search Engine",
    description: "Semantic search infrastructure built on transformer embeddings.",
    link: "#",
  },
  {
    title: "Voice Synthesis API",
    description: "Real-time voice cloning and synthesis for conversational AI.",
    link: "#",
  },
  {
    title: "Data Pipeline Framework",
    description: "Scalable ETL system processing millions of records daily.",
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[800px] px-6 py-24 md:py-32 lg:py-40">
        
        {/* Header */}
        <header className="mb-20 md:mb-28">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            Miguel Angel Giraldo
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground tracking-wide">
            AI Software Engineer
          </p>
        </header>

        {/* Navigation */}
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
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link 
                href="mailto:hello@example.com"
                className="text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                Email
              </Link>
            </li>
          </ul>
          <hr className="border-t border-border mt-6" />
        </nav>

        {/* Projects Section */}
        <section id="projects" className="mb-20 md:mb-28">
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-10 md:mb-12">
            Projects
          </h2>
          <div className="space-y-10 md:space-y-12">
            {projects.map((project, index) => (
              <article key={index}>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground italic mb-3 leading-relaxed">
                  {project.description}
                </p>
                <Link 
                  href={project.link}
                  className="inline-flex items-center text-sm text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  View Project
                  <span className="ml-1">&rarr;</span>
                </Link>
                {index < projects.length - 1 && (
                  <hr className="border-t border-border mt-10 md:mt-12" />
                )}
              </article>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20 md:mb-28">
          <hr className="border-t border-border mb-10 md:mb-12" />
          <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-6 md:mb-8">
            About
          </h2>
          <p className="text-foreground leading-relaxed md:text-lg max-w-prose">
            I build intelligent systems with craft and intention. My work focuses on the intersection 
            of artificial intelligence and human experience, creating tools that feel both powerful 
            and considered. Based in Cali, Colombia.
          </p>
        </section>

        {/* Footer */}
        <footer>
          <hr className="border-t border-border mb-6" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </p>
        </footer>

      </div>
    </main>
  );
}
