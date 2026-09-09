import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GitHubIcon } from "./BrandIcons";
import { thumbnailStyles, thumbnailIcons } from "../data/projectThumbnails";
import { cn } from "../utils/cn";

export function ProjectCard({
  slug,
  title,
  description,
  techStack,
  github,
  live,
  thumbnail,
  showGithub = true,
}) {
  const hasGithub = Boolean(github && github !== "#" && showGithub);
  const hasLive = Boolean(live && live !== "#");

  return (
    <div
      className={cn(
        "group rounded-xl border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900",
        "overflow-hidden flex flex-col justify-between",
        "transition-all duration-300 ease-out",
        "hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700",
        "hover:-translate-y-1"
      )}
    >
      <div>
        {/* Thumbnail area */}
        <div
          className={cn(
            "relative h-48 sm:h-56 bg-gradient-to-br flex items-center justify-center",
            "border-b border-zinc-200 dark:border-zinc-800",
            thumbnailStyles[thumbnail] ||
              "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
          )}
        >
          <span className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 select-none">
            {thumbnailIcons[thumbnail] || "💻"}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 pb-0">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
            <Link
              to={`/project/${slug}`}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 hover:underline underline-offset-4 transition-colors"
            >
              {title}
            </Link>
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
            {description}
          </p>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
        <Link
          to={`/project/${slug}`}
          className={cn(
            "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg",
            "text-zinc-700 dark:text-zinc-300",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800",
            "transition-colors duration-200"
          )}
        >
          Details
          <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
        {hasLive && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${title}`}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg",
              "bg-indigo-600 text-white hover:bg-indigo-700",
              "transition-colors duration-200"
            )}
          >
            <ExternalLink size={15} strokeWidth={1.5} />
            Live Link
          </a>
        )}
        {hasGithub && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} code on GitHub`}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg",
              "border border-zinc-200 dark:border-zinc-700",
              "text-zinc-700 dark:text-zinc-300",
              "hover:bg-zinc-50 dark:hover:bg-zinc-800",
              "transition-colors duration-200"
            )}
          >
            <GitHubIcon size={15} className="fill-current" />
            Code
          </a>
        )}
      </div>
    </div>
  );
}
