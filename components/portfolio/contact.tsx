import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            I&apos;m currently open to new opportunities and interesting
            projects. Whether you have a question or just want to say hi, I&apos;ll
            do my best to get back to you!
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Available Worldwide (Remote)</span>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-base px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="mailto:mgiraldopolanco@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/miguel-angel-giraldo-100472160/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
