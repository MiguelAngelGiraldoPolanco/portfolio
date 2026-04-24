import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Software & AI Engineer",
    company: "Freelance",
    period: "Aug 2025 - Present",
    duration: "Present",
    description:
      "Architecting distributed systems and intelligent agents. Focused on bridging robust backend engineering with cutting-edge AI integration.",
    highlights: [
      "Designed microservices using Java 21 and Spring Boot 3",
      "Integrated AI agents (LangGraph) into Dockerized environments",
      "Automated CI/CD pipelines for high-availability services",
    ],
  },
  {
    title: "Software Developer",
    company: "JoanRaez.com",
    period: "Apr 2025 - Jul 2025",
    duration: "4 months",
    description:
      "Full-stack development with a focus on API-First design and software reliability.",
    highlights: [
      "Built end-to-end applications using Spring Boot and Angular",
      "Implemented RESTful contracts following API First principles",
      "Ensured code quality with JUnit and Mockito (Unit & Integration testing)",
    ],
    },
  {
    title: "Operations & Warehouse Systems Lead",
    company: "Pepe La Sal",
    period: "2021 - 2025",
    duration: "4 years",
    description:
      "Led the digital transformation of supply chain processes and managed mission-critical systems.",
    highlights: [
      "Translated complex business needs into technical specifications for automation",
      "Optimized operations using Oracle SQL and PostgreSQL data modeling",
      "Level 3 Technical Support for ERP/WMS mission-critical systems",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Title & Company */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {exp.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {exp.period}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
