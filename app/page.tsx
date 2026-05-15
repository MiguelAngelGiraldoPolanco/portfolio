

import { About } from "@/components/portfolio/about";
import { Project } from "@/components/portfolio/project";
import { Footer } from "@/components/portfolio/footer"
import { Hero } from "@/components/portfolio/hero"
import { Nav } from "@/components/portfolio/nav"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-[800px] px-10 py-54 md:py-32 lg:py-40">
        <Hero></Hero>
        <Nav></Nav>
        <Project></Project>
        <About></About>
        <Footer></Footer>
      </div>
    </main>
  );
}
