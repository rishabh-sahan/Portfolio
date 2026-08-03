import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useScrollShrink } from "../hooks/useScrollShrink";
import { cn } from "../utils/cn";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ theme, toggleTheme }) {
  const isScrolled = useScrollShrink(50);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300 ease-out",
        isScrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200/60 dark:border-zinc-800/60"
          : "bg-transparent",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 transition-colors"
        >
          RJ
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg",
                "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                "transition-colors duration-200"
              )}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right side: Theme toggle + Mobile hamburger */}
        <div className="flex items-center gap-1">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "md:hidden inline-flex items-center justify-center rounded-lg p-2",
              "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
              "hover:bg-zinc-100 dark:hover:bg-zinc-800",
              "transition-colors duration-200",
              "cursor-pointer"
            )}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile nav panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-out",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={handleLinkClick}
              className={cn(
                "block px-3 py-2.5 text-sm font-medium rounded-lg",
                "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                "transition-colors duration-200"
              )}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
