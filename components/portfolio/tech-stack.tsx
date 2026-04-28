"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./bento-card";
import { 
  Cpu, 
  Database, 
  Globe, 
  Layers, 
  Terminal, 
  Zap,
  Brain,
  Cloud
} from "lucide-react";

const techCategories = [
  {
    title: "AI & ML",
    icon: Brain,
    technologies: ["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    title: "Frontend",
    icon: Globe,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Terminal,
    technologies: ["Node.js", "Python", "Go", "FastAPI", "GraphQL"],
  },
  {
    title: "Data",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    technologies: ["AWS", "Vercel", "Docker", "Kubernetes"],
  },
  {
    title: "Tools",
    icon: Layers,
    technologies: ["Git", "CI/CD", "Terraform", "Prometheus"],
  },
];

export function TechStack() {
  return (
    <section className="px-6 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {techCategories.map((category, index) => (
            <BentoCard key={category.title} delay={index * 0.08}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-medium text-foreground tracking-tight">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm tracking-wide bg-secondary text-foreground/80 rounded-full border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
