import { skillCategories } from "../data/skills";
import { SectionHeading } from "../components/SectionHeading";
import { SkillCard } from "../components/SkillCard";
import { FadeIn } from "../components/FadeIn";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Skills"
            subtitle="Technologies and tools I work with."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat, index) => (
            <FadeIn key={cat.category} delay={index * 75}>
              <SkillCard
                category={cat.category}
                icon={cat.icon}
                skills={cat.skills}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
