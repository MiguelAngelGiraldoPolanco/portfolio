"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground uppercase tracking-[0.3em] text-sm mb-6"
        >
          Portfolio
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[1.1]"
        >
          AI Software Engineer
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mt-6"
        >
          <span className="h-px w-12 bg-border" />
          <p className="text-lg md:text-xl text-muted-foreground tracking-wide">
            Fullstack Developer
          </p>
          <span className="h-px w-12 bg-border" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          Crafting intelligent digital experiences through the intersection of artificial intelligence and modern web development.
        </motion.p>
      </motion.div>
    </section>
  );
}
