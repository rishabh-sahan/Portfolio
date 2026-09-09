import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Projects"
            subtitle="A selection of things I've built."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <ProjectCard {...project} showGithub={false} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={200}>
          <div className="mt-10 flex justify-center">
            <Link to="/projects">
              <Button variant="secondary" size="md">
                View All Projects
                <ArrowRight size={16} strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
