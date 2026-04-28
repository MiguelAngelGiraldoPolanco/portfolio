"use client";

import { motion } from "framer-motion";
import { BentoCard } from "./bento-card";
import { ExternalLink, Calendar, Clock, Newspaper, Mic, Video } from "lucide-react";

const articles = [
  {
    title: "The Future of AI in Software Development",
    publication: "Tech Chronicles",
    date: "Mar 2024",
    readTime: "8 min read",
    type: "article",
    excerpt: "Exploring how artificial intelligence is reshaping the way we write, test, and deploy code in modern software teams.",
    link: "#",
    featured: true,
  },
  {
    title: "Building Ethical AI Systems",
    publication: "AI Weekly",
    date: "Feb 2024",
    readTime: "12 min read",
    type: "article",
    excerpt: "A deep dive into the principles and practices for developing responsible AI applications.",
    link: "#",
  },
  {
    title: "From Code to Copy: My Journey as a Tech Writer",
    publication: "Medium",
    date: "Jan 2024",
    readTime: "5 min read",
    type: "article",
    excerpt: "Personal reflections on bridging the gap between technical expertise and accessible storytelling.",
    link: "#",
  },
  {
    title: "The State of Fullstack Development",
    publication: "Dev Podcast",
    date: "Dec 2023",
    readTime: "45 min",
    type: "podcast",
    excerpt: "Guest appearance discussing modern fullstack architectures and the tools shaping the industry.",
    link: "#",
  },
  {
    title: "Machine Learning for Web Developers",
    publication: "Tech Talk Series",
    date: "Nov 2023",
    readTime: "30 min",
    type: "video",
    excerpt: "Conference talk on integrating ML models into web applications without a data science background.",
    link: "#",
  },
  {
    title: "Why Colombia is the Next Tech Hub",
    publication: "Startup Digest",
    date: "Oct 2023",
    readTime: "6 min read",
    type: "article",
    excerpt: "Analyzing the growing tech ecosystem in Latin America and Colombia's emerging role.",
    link: "#",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "podcast":
      return <Mic className="w-4 h-4" />;
    case "video":
      return <Video className="w-4 h-4" />;
    default:
      return <Newspaper className="w-4 h-4" />;
  }
};

export function Journalism() {
  const featuredArticle = articles.find((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <section className="px-6 py-24 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Words & Ideas
        </p>
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          Journalism
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured Article - Large Card */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:row-span-2"
          >
            <BentoCard className="h-full group">
              <a href={featuredArticle.link} className="block h-full">
                <div className="h-48 lg:h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-6 flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-primary/40" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs uppercase tracking-wider bg-primary/10 text-primary rounded-full">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {featuredArticle.publication}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </a>
            </BentoCard>
          </motion.div>
        )}

        {/* Other Articles */}
        {otherArticles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <BentoCard className="h-full group">
              <a href={article.link} className="block h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {getIcon(article.type)}
                    <span className="text-sm">{article.publication}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
              </a>
            </BentoCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
