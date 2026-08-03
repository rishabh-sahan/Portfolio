import { Download, FileText } from "lucide-react";
import { profile } from "../data/profile";
import { Button } from "../components/Button";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";

export function Resume() {
  return (
    <section
      id="resume"
      className="py-20 sm:py-28 bg-zinc-50/50 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Resume"
            subtitle="Download my resume to learn more about my experience."
          />
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-col items-start gap-6 max-w-xl">
            <div className="flex items-center gap-4 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 w-full">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <FileText
                  size={24}
                  strokeWidth={1.5}
                  className="text-zinc-600 dark:text-zinc-400"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  Rishabh Jain — Resume
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  PDF • Updated 2025
                </p>
              </div>
              <a
                href={profile.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="md">
                  <Download size={16} strokeWidth={2} />
                  Download
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
