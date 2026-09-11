import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Info } from "lucide-react";
import { projects } from "../data/projects";
import { thumbnailStyles, thumbnailIcons } from "../data/projectThumbnails";
import { GitHubIcon } from "../components/BrandIcons";
import { Button } from "../components/Button";
import { FadeIn } from "../components/FadeIn";
import { cn } from "../utils/cn";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.title = project ? `${project.title} — Rishabh Jain` : "Project not found";
  }, [project]);

  if (!project) {
    return (
      <section className="pt-32 pb-20 min-h-screen">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
            Project not found
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/projects">
            <Button variant="primary" size="md">
              <ArrowLeft size={16} strokeWidth={2} />
              Back to Projects
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  const {
    title,
    overview,
    features,
    techStack,
    github,
    live,
    thumbnail,
    screenshots,
    notes,
  } = project;
  const hasGithub = Boolean(github && github !== "#");
  const hasLive = Boolean(live && live !== "#");

  return (
    <section className="pt-32 pb-20 sm:pb-28 min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors mb-8"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Back to Projects
          </Link>
        </FadeIn>

        <FadeIn delay={50}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {hasLive && (
              <a href={live} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="md">
                  <ExternalLink size={16} strokeWidth={2} />
                  Live Link
                </Button>
              </a>
            )}
            {hasGithub && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="md">
                  <GitHubIcon size={16} className="fill-current" />
                  View Code
                </Button>
              </a>
            )}
          </div>
        </FadeIn>

        {notes && notes.length > 0 && (
          <FadeIn delay={175}>
            <div className="flex gap-3 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 mb-10">
              <Info
                size={18}
                strokeWidth={1.5}
                className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
              />
              <ul className="space-y-1.5">
                {notes.map((note, i) => (
                  <li
                    key={i}
                    className="text-sm text-indigo-900 dark:text-indigo-200 leading-relaxed"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {/* Visual — real screenshots if available, otherwise the brand placeholder */}
        <FadeIn delay={200}>
          {screenshots && screenshots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} screenshot ${i + 1}`}
                  className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div
              className={cn(
                "h-56 sm:h-72 rounded-xl bg-gradient-to-br flex items-center justify-center mb-12",
                "border border-zinc-200 dark:border-zinc-800",
                thumbnailStyles[thumbnail] ||
                  "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
              )}
            >
              <span className="text-7xl opacity-60 select-none">
                {thumbnailIcons[thumbnail] || "💻"}
              </span>
            </div>
          )}
        </FadeIn>

        <FadeIn delay={250}>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Overview
          </h2>
          <div className="space-y-5 mb-10">
            {overview.map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>

        {features && features.length > 0 && (
          <FadeIn delay={300}>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Key Features
            </h2>
            <ul className="space-y-2 mb-4">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-zinc-400 dark:before:text-zinc-600"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
