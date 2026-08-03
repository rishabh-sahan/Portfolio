import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="About"
            subtitle="A bit about me and what drives me."
          />
        </FadeIn>

        <div className="max-w-3xl">
          {profile.about.map((paragraph, index) => (
            <FadeIn key={index} delay={index * 100}>
              <p className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 mb-5 last:mb-0">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
