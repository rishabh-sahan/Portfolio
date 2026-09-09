import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Certifications"
            subtitle="Courses and credentials I've completed."
          />
        </FadeIn>

        {certifications.length === 0 ? (
          <FadeIn delay={100}>
            <p className="text-zinc-500 dark:text-zinc-400">
              Certifications coming soon.
            </p>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <FadeIn key={cert.name} delay={index * 75}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-out"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 shrink-0">
                    <Award
                      size={18}
                      strokeWidth={1.5}
                      className="text-indigo-600 dark:text-indigo-400"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {cert.name}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">
                      {cert.date}
                    </p>
                  </div>
                  {cert.link && (
                    <ExternalLink
                      size={15}
                      strokeWidth={1.5}
                      className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors shrink-0"
                    />
                  )}
                </a>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
