import { projects } from "../data/projects";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { FadeIn } from "../components/FadeIn";

export function ProjectsPage() {
  return (
    <section className="pt-32 pb-20 sm:pb-28 min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="All Projects"
            subtitle="Everything I've built, in detail."
          />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 100}>
              <ProjectCard {...project} showGithub={false} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
