import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Experience"
            subtitle="Where I've worked and what I've built."
          />
        </FadeIn>

        <div className="max-w-3xl ml-4 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-10">
          {experience.map((job, index) => (
            <FadeIn key={job.company} delay={index * 100} direction="left">
              <div className="relative pl-8">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-zinc-50 dark:ring-zinc-900" />

                <div className="flex items-start gap-3 mb-3">
                  <Briefcase
                    size={18}
                    strokeWidth={1.5}
                    className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0"
                  />
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {job.role}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.company}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-500">
                      {job.duration}
                    </p>
                  </div>
                </div>

                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
                  {job.project}
                </p>

                <ul className="space-y-2">
                  {job.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-zinc-400 dark:before:text-zinc-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
