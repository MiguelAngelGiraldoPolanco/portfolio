"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm tracking-wide">
            © {new Date().getFullYear()} — Designed & Built with care
          </p>
          
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Resume
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
