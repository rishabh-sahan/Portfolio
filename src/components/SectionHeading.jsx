import { cn } from "../utils/cn";

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
