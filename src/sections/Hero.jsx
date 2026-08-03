import { ArrowRight, Download } from "lucide-react";
import { profile } from "../data/profile";
import { Button } from "../components/Button";
import { SocialLinks } from "../components/SocialLinks";
import { FadeIn } from "../components/FadeIn";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="mx-auto max-w-6xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <FadeIn delay={0}>
              <p className="text-sm font-medium tracking-wide uppercase text-zinc-500 dark:text-zinc-400 mb-4">
                Welcome
              </p>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                {profile.name}
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-4 text-lg sm:text-xl text-zinc-500 dark:text-zinc-400 font-medium">
                {profile.title}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
                {profile.introduction}
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects">
                  <Button variant="primary" size="lg">
                    View Projects
                    <ArrowRight size={16} strokeWidth={2} />
                  </Button>
                </a>
                <a
                  href={profile.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="secondary" size="lg">
                    <Download size={16} strokeWidth={2} />
                    Download Resume
                  </Button>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={500}>
              <div className="mt-8">
                <SocialLinks size={20} />
              </div>
            </FadeIn>
          </div>

          {/* Portrait */}
          <FadeIn
            delay={200}
            direction="none"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl font-bold text-zinc-400 dark:text-zinc-600 select-none">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              {/* Subtle decorative element */}
              <div className="absolute -z-10 inset-0 translate-x-4 translate-y-4 rounded-2xl bg-zinc-200/50 dark:bg-zinc-800/50" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
