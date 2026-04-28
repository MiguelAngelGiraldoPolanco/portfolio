"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./bento-card";
import { MapPin, Briefcase, Coffee, Github, Linkedin, Mail } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "40+" },
  { label: "AI Models Deployed", value: "15+" },
];

export function About() {
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
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Get to Know Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {/* Location Card */}
          <BentoCard delay={0}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Location
              </span>
            </div>
            <p className="text-xl font-medium text-foreground">Cali, Colombia</p>
            <p className="text-sm text-muted-foreground mt-1">UTC-5</p>
          </BentoCard>

          {/* Status Card */}
          <BentoCard delay={0.1}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Briefcase className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Status
              </span>
            </div>
            <p className="text-xl font-medium text-foreground">Open to Work</p>
            <p className="text-sm text-muted-foreground mt-1">Full-time / Contract</p>
          </BentoCard>

          {/* Personal Touch Card */}
          <BentoCard delay={0.2}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Coffee className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Fuel
              </span>
            </div>
            <p className="text-xl font-medium text-foreground">Coffee Lover</p>
            <p className="text-sm text-muted-foreground mt-1">Best ideas brew here</p>
          </BentoCard>

          {/* Connect Card */}
          <BentoCard delay={0.3}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm text-muted-foreground uppercase tracking-wider">
                Connect
              </span>
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                className="p-2.5 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </BentoCard>

          {/* Stats Section */}
          <div className="md:col-span-4 grid grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <BentoCard key={stat.label} delay={0.4 + index * 0.1}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-light text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
