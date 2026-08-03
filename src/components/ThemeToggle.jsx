import { Sun, Moon } from "lucide-react";
import { cn } from "../utils/cn";

export function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg p-2",
        "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
        "hover:bg-zinc-100 dark:hover:bg-zinc-800",
        "transition-colors duration-200",
        "cursor-pointer",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
      )}
    >
      <Sun
        size={18}
        strokeWidth={1.5}
        className={cn(
          "absolute transition-all duration-300",
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
      <Moon
        size={18}
        strokeWidth={1.5}
        className={cn(
          "transition-all duration-300",
          theme === "dark"
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        )}
      />
    </button>
  );
}
