import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import { cn } from "../utils/cn";

/* Minimal color accents for project thumbnails — keeps things neutral */
const thumbnailStyles = {
  stockpulse: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
  pentai: "from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30",
  blueforce: "from-sky-50 to-blue-50 dark:from-sky-950/30 dark:to-blue-950/30",
};

const thumbnailIcons = {
  stockpulse: "📈",
  pentai: "🤖",
  blueforce: "🔵",
};

export function ProjectCard({
  title,
  description,
  techStack,
  github,
  live,
  thumbnail,
}) {
  return (
    <div
      className={cn(
        "group rounded-xl border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900",
        "overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:shadow-lg hover:border-zinc-300 dark:hover:border-zinc-700",
        "hover:-translate-y-1"
      )}
    >
      {/* Thumbnail area */}
      <div
        className={cn(
          "relative h-48 sm:h-56 bg-gradient-to-br flex items-center justify-center",
          "border-b border-zinc-200 dark:border-zinc-800",
          thumbnailStyles[thumbnail] ||
            "from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800"
        )}
      >
        <span className="text-6xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
          {thumbnailIcons[thumbnail] || "💻"}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          {title}
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

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
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
          {live && live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${title}`}
              className={cn(
                "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg",
                "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900",
                "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                "transition-colors duration-200"
              )}
            >
              <ExternalLink size={15} strokeWidth={1.5} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
