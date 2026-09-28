import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Philosophy } from "./components/Philosophy";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Hobbies } from "./components/Hobbies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Philosophy />
        <Experience />
        <Education />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
