import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Education"
            subtitle="My academic background."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex items-center gap-4 max-w-xl">
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-indigo-50 dark:bg-indigo-950/40 shrink-0">
              <GraduationCap
                size={20}
                strokeWidth={1.5}
                className="text-indigo-600 dark:text-indigo-400"
              />
            </div>
            <div>
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                {education.degree}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {education.institution}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {education.duration}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
