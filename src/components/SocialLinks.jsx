import { Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon, InstagramIcon, XTwitterIcon } from "./BrandIcons";
import { profile } from "../data/profile";
import { cn } from "../utils/cn";

const socialItems = [
  { key: "email", icon: Mail, href: profile.social.email, label: "Email", isBrand: false },
  {
    key: "linkedin",
    icon: LinkedInIcon,
    href: profile.social.linkedin,
    label: "LinkedIn",
    isBrand: true,
  },
  {
    key: "github",
    icon: GitHubIcon,
    href: profile.social.github,
    label: "GitHub",
    isBrand: true,
  },
  {
    key: "instagram",
    icon: InstagramIcon,
    href: profile.social.instagram,
    label: "Instagram",
    isBrand: true,
    strokeOnly: true,
  },
  {
    key: "twitter",
    icon: XTwitterIcon,
    href: profile.social.twitter,
    label: "X (Twitter)",
    isBrand: true,
  },
];

export function SocialLinks({ size = 20, className, showLabels = false }) {
  const handleClick = (e, key, href) => {
    if (key === "email") {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socialItems.map(({ key, icon: Icon, href, label, isBrand, strokeOnly }) => (
        <a
          key={key}
          href={href}
          onClick={(e) => handleClick(e, key, href)}
          target={key === "email" ? undefined : "_blank"}
          rel={key === "email" ? undefined : "noopener noreferrer"}
          aria-label={label}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg p-2",
            "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
            "transition-colors duration-200",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100"
          )}
        >
          {isBrand && !strokeOnly ? (
            <Icon size={size} className="fill-current" />
          ) : (
            <Icon size={size} strokeWidth={1.5} />
          )}
          {showLabels && <span className="text-sm font-medium">{label}</span>}
        </a>
      ))}
    </div>
  );
}
