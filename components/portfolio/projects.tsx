import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder} from "lucide-react";
import Image from 'next/image';

const projects = [
  {
    id:1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart functionality, secure payments, and admin dashboard for inventory management.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id:2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id:3,
    title: "Sempiterno | Artisanal Branding & Landing Page",
    description: "High-performance landing page developed for a premium handmade candle brand. Focused on conversion-driven design, SEO optimization, and seamless mobile experience.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel Analytics"],
    image:"/mockup-sempiterno.png",
    highlights: [
      "Implemented automated CI/CD deployment via Vercel.",
      "Mobile-first responsive design with custom-built UI components.",
      "Optimized Core Web Vitals and SEO metadata for local search ranking.",
      "Integrated real-time analytics to monitor user engagement."
    ],
    github: "https://github.com/MiguelAngelGiraldoPolanco/sempiterno-landing-page",
    live: "https://sempiterno-landing-page.vercel.app/", 
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building exceptional web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
            >{/* --- NUEVA SECCIÓN DE IMAGEN DINÁMICA --- */}
              <div className="relative h-48 w-full border-b border-border overflow-hidden">
                {project.image ? (
                  // Si el proyecto tiene imagen en los datos, muestra el Mockup
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={index === 0} // Optimiza la carga de la primera imagen
                  />
                ) : (
                  // Si NO tiene imagen, muestra el placeholder de la carpeta
                  <div className="h-full w-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                    <Folder className="h-16 w-16 text-muted-foreground group-hover:text-primary/50 transition-colors" />
                  </div>
                )}
              </div>
              {/* --- FIN DE SECCIÓN DE IMAGEN --- */}
              {/* Project Image Placeholder */}
              {/* <div className="h-48 bg-secondary/50 flex items-center justify-center border-b border-border group-hover:bg-primary/5 transition-colors">
                <Folder className="h-16 w-16 text-muted-foreground group-hover:text-primary/50 transition-colors" />
              </div> */}

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-xs font-medium text-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-border hover:bg-secondary hover:border-primary/30"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
