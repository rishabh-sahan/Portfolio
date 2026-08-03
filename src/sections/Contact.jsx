import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon, XTwitterIcon } from "../components/BrandIcons";
import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";
import { cn } from "../utils/cn";

const contactLinks = [
  {
    label: "Email",
    href: profile.social.email,
    icon: Mail,
    value: profile.social.email.replace("mailto:", ""),
    external: false,
    isBrand: false,
  },
  {
    label: "LinkedIn",
    href: profile.social.linkedin,
    icon: LinkedInIcon,
    value: "Connect on LinkedIn",
    external: true,
    isBrand: true,
  },
  {
    label: "GitHub",
    href: profile.social.github,
    icon: GitHubIcon,
    value: "View on GitHub",
    external: true,
    isBrand: true,
  },
  {
    label: "X (Twitter)",
    href: profile.social.twitter,
    icon: XTwitterIcon,
    value: "Follow on X",
    external: true,
    isBrand: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Contact"
            subtitle="Get in touch — I'd love to hear from you."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {contactLinks.map(
            ({ label, href, icon: Icon, value, external, isBrand }, index) => (
              <FadeIn key={label} delay={index * 100}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group flex items-center gap-4 p-5 rounded-xl",
                    "border border-zinc-200 dark:border-zinc-800",
                    "bg-white dark:bg-zinc-900",
                    "hover:border-zinc-300 dark:hover:border-zinc-700",
                    "hover:shadow-md hover:-translate-y-0.5",
                    "transition-all duration-300 ease-out"
                  )}
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 shrink-0">
                    {isBrand ? (
                      <Icon size={18} className="text-zinc-600 dark:text-zinc-400 fill-current" />
                    ) : (
                      <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="text-zinc-600 dark:text-zinc-400"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {label}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors shrink-0"
                  />
                </a>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
}
