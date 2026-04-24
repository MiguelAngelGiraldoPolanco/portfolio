const skills = [
  { name: "Java/Sping Boot", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "LangGraph", category: "frontend" },
  { name: "Python", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Git", category: "tools" },
  { name: "REST APIs", category: "tools" },
  { name: "GraphQL", category: "tools" },
  { name: "Docker", category: "tools" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a Software Engineer dedicated to building high-performance applications and scalable architectures. 
              With a strong foundation in Java and Spring Boot, I specialize in creating 
              robust backend systems that prioritize reliability and clean code.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My approach combines traditional engineering excellence with Modern AI Integration, 
              allowing me to build smarter solutions—from automated microservices to intelligent data flows.
               Whether working on mission-critical systems or innovative freelance projects, my goal is always the same:
                delivering high-quality, maintainable software that solves real-world challenges.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors duration-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
