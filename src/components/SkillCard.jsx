import { cn } from "../utils/cn";

export function SkillCard({ category, icon: Icon, skills }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200 dark:border-zinc-800",
        "bg-white dark:bg-zinc-900",
        "p-6",
        "transition-all duration-300 ease-out",
        "hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700",
        "hover:-translate-y-0.5"
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800">
          <Icon size={18} strokeWidth={1.5} className="text-zinc-600 dark:text-zinc-400" />
        </div>
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className={cn(
              "inline-block px-3 py-1 text-xs font-medium rounded-md",
              "bg-zinc-100 text-zinc-700",
              "dark:bg-zinc-800 dark:text-zinc-300",
              "transition-colors duration-200"
            )}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
