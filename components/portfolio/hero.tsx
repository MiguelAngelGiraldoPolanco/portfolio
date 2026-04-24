"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, User } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo Placeholder */}
        <div className="mb-8 flex justify-center">
        <div className="relative w-50 h-50 rounded-full border-2 border-primary/20 overflow-hidden shadow-xl">
          <Image 
            src="/profile.jpg" 
            alt="Miguel Ángel Giraldo"
            fill 
            className="object-cover" 
            priority 
          />
        </div>
      </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          <span className="text-foreground">Hi, I&apos;m </span>
          <span className="text-primary">Miguel Angel Giraldo</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
          Software & AI Engineer
        </p>

        {/* Description */}
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          Building high-availability distributed systems. Expert in Microservices,
          Hexagonal Architecture, and the strategic integration of AI agents within cloud environments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="text-base px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
