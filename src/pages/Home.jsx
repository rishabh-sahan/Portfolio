import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Education } from "../sections/Education";
import { Experience } from "../sections/Experience";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Certifications } from "../sections/Certifications";
import { Resume } from "../sections/Resume";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Contact />
    </>
  );
}
