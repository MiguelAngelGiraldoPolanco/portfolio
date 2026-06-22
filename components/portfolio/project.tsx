"use client";
const projects = [
    {
        title: "(Open Source Library) | Pri0-SDK: Intelligent Data Sanitization",
        description: "A high-performance, developer-first SDK designed for privacy-centric data masking. Built on a modular, provider-based architecture, it enables automated, rule-based sanitization of sensitive information (PII) across global jurisdictions. The system features a CI/CD-validated regex registry, dynamic pattern validation, and strict type safety, ensuring reliable PII protection for technical applications without compromising data integrity.",
        link: "#",
        githubf: "#",
        githubb: "https://github.com/MiguelAngelGiraldoPolanco/pri0-sdk",
    },
    {
        title: "(Personal Project) | Agents for Social Media & Content Creation",
        description: "A personal project featuring an autonomous AI agent system built to accelerate LinkedIn audience growth and visibility. By leveraging open-source LLMs locally, the system continuously analyzes trending topics and post comments to discover viral content opportunities. It then automatically drafts and refines high-converting, technical posts aimed at maximizing impressions, engagement, and follower conversion without relying on expensive external APIs.",
        link: "#",
        githubf: "#",
        githubb: "https://github.com/MiguelAngelGiraldoPolanco/crew_linkedin",
    },
    {
        title: "pri0.com | Sovereign AI Infrastructure & Enterprise Gateway",
        description: "Architected a secure, automated deployment platform for sovereign AI agents and open-source models hosted natively within AWS or Google Cloud Region Spain. Engineered a developer-first experience combining a high-conversion landing page with dedicated cloud pipelines that eliminate per-token utility costs and ensure absolute GDPR compliance for regulated industries.",
        link: "https://pri0.com",
        githubf: "https://github.com/MiguelAngelGiraldoPolanco",
        githubb: "https://github.com/MiguelAngelGiraldoPolanco",
    },
    {
        title: "aka Tim | Official Artist Website",
        description: "Designed and developed the official single-page website for indie musician aka Tim (Tim Gallego), crafting a distinctive blend of dreamy alternative soul and indie surf rock. The site serves as a central hub to stream his music across Spotify, Apple Music, Bandcamp and more, read his bio, explore tour dates and get in touch. Built with a strong privacy-first ethos: no analytics, cookies or tracking, with a contact flow that opens the visitor's own email client without collecting any personal data.",
        link: "https://akatim.art",
        githubf: "#",
        githubb: "#",
    },
    {
        title: "Sempiterno | Full-Stack Platform & Business Intelligence",
        description: "End-to-end development of a digital preservation and e-commerce platform. Engineered a scalable architecture featuring a high-conversion landing page and a custom administrative dashboard for automated sales tracking, ad metrics analytics, and customer database management.",
        link: "https://sempiterno-landing-page.vercel.app",
        githubf: "https://github.com/MiguelAngelGiraldoPolanco/sempiterno-landing-page",
        githubb: "https://github.com/MiguelAngelGiraldoPolanco/Sempiterno-backend",
    },


];

export function Project() {
    return (
        <section id="projects" className="mb-20 md:mb-28">
            <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-10 md:mb-12">
                Projects
            </h2>
            <div className="space-y-10 md:space-y-12">
                {projects.map((project, index) => (
                    <article key={index}>
                        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground italic mb-3 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Mostrar link del proyecto solo si existe y no es "#" */}
                        {project.link && project.link !== "#" && (
                            <div className="mb-1">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-foreground hover:text-muted-foreground transition-colors duration-200">
                                    View Project <span className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        )}

                        {/* Mostrar link de Frontend solo si existe y no es "#" */}
                        {project.githubf && project.githubf !== "#" && (
                            <div className="mb-1">
                                <a href={project.githubf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-foreground hover:text-muted-foreground transition-colors duration-200">
                                    GitHub-Frontend <span className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        )}

                        {/* Mostrar link de Backend solo si existe y no es "#" */}
                        {project.githubb && project.githubb !== "#" && (
                            <div className="mb-1">
                                <a href={project.githubb} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-foreground hover:text-muted-foreground transition-colors duration-200">
                                    GitHub-Backend <span className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        )}

                        {index < projects.length - 1 && (
                            <hr className="border-t border-border mt-10 md:mt-12" />
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

