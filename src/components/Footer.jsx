import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} Rishabh Jain. All rights reserved.
          </p>

          {/* Social icons */}
          <SocialLinks size={18} />
        </div>
      </div>
    </footer>
  );
}
