"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./bento-card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Sempiterno",
    description: "AI-powered platform that increased user engagement by 340% through intelligent content recommendations and predictive analytics.",
    tags: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
    image: "/projects/sempiterno.jpg",
    featured: true,
  },
  {
    title: "NeuralChat",
    description: "Real-time conversational AI assistant with 99.9% uptime serving 50K+ daily active users.",
    tags: ["TypeScript", "LangChain", "Redis"],
    image: "/projects/neuralchat.jpg",
    featured: false,
  },
  {
    title: "DataForge",
    description: "ETL pipeline processing 2M+ records daily with automated ML model training and deployment.",
    tags: ["Python", "Apache Airflow", "TensorFlow"],
    image: "/projects/dataforge.jpg",
    featured: false,
  },
  {
    title: "CloudSync",
    description: "Distributed file synchronization system with end-to-end encryption and real-time collaboration.",
    tags: ["Go", "gRPC", "AWS"],
    image: "/projects/cloudsync.jpg",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const isFeatured = project.featured;
  
  return (
    <BentoCard
      delay={index * 0.1}
      className={`group cursor-pointer ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <div className={`flex flex-col h-full ${isFeatured ? "min-h-[400px]" : "min-h-[200px]"}`}>
        <div className={`relative bg-secondary rounded-xl overflow-hidden mb-4 ${isFeatured ? "h-64 md:h-80" : "h-32 md:h-40"}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground/40 text-sm tracking-widest uppercase">
              {project.title}
            </span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between mb-2">
            <h3 className={`font-medium text-foreground tracking-tight ${isFeatured ? "text-2xl" : "text-lg"}`}>
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <p className={`text-muted-foreground leading-relaxed mb-4 ${isFeatured ? "text-base" : "text-sm"}`}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs tracking-wide bg-secondary text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BentoCard>
  );
}

export function Projects() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
