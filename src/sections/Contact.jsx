import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon, XTwitterIcon } from "../components/BrandIcons";
import { profile } from "../data/profile";
import { SectionHeading } from "../components/SectionHeading";
import { FadeIn } from "../components/FadeIn";
import { cn } from "../utils/cn";

export function Contact() {
  const contactLinks = [
    {
      key: "email",
      label: "Email",
      href: profile.social.email,
      icon: Mail,
      value: profile.social.email.replace("mailto:", ""),
      external: false,
      isBrand: false,
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      href: profile.social.linkedin,
      icon: LinkedInIcon,
      value: "Connect on LinkedIn",
      external: true,
      isBrand: true,
    },
    {
      key: "github",
      label: "GitHub",
      href: profile.social.github,
      icon: GitHubIcon,
      value: "View on GitHub",
      external: true,
      isBrand: true,
    },
    {
      key: "phone",
      label: "Phone",
      href: profile.social.phone,
      icon: Phone,
      value: "+91 93531 13908",
      external: false,
      isBrand: false,
    },
    {
      key: "instagram",
      label: "Instagram",
      href: profile.social.instagram,
      icon: InstagramIcon,
      value: "Follow on Instagram",
      external: true,
      isBrand: true,
      strokeOnly: true,
    },
    {
      key: "twitter",
      label: "X (Twitter)",
      href: profile.social.twitter,
      icon: XTwitterIcon,
      value: "Follow on X",
      external: true,
      isBrand: true,
    },
  ];

  const handleClick = (e, key, href) => {
    if (key === "email" || key === "phone") {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            title="Contact"
            subtitle="Get in touch — I'd love to hear from you."
          />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {contactLinks.map(
            ({ key, label, href, icon: Icon, value, external, isBrand, strokeOnly }, index) => (
              <FadeIn key={label} delay={index * 100}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, key, href)}
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
                    {isBrand && !strokeOnly ? (
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
