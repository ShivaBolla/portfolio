import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import WorkExperience from "@/components/WorkExperience";
import FloatingDock from "@/components/FloatingDock";

export default function Home() {
  return (
    <main className="bg-rich-black min-h-screen text-foreground selection:bg-tiffany-blue selection:text-rich-black">
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="work-experience">
        <WorkExperience />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <FloatingDock />
    </main>
  );
}
