import {
  Code2,
  Layout,
  Server,
  Shield,
  Database,
  Cloud,
  Brain,
  GitBranch,
} from "lucide-react";

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: ["HTML",  "CSS", "React.js", "Vite", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "WebSockets",
      "NextAuth.js",
    ],
  },
  {
    category: "Security",
    icon: Shield,
    skills: [
      "JWT Authentication",
      "OAuth 2.0",
      "Row-Level Security",
      "TOTP / 2FA",
      "Rate Limiting",
      "Input Sanitization",
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Firestore", "Supabase"],
  },
  {
    category: "Cloud & Deployment",
    icon: Cloud,
    skills: ["AWS", "Google Cloud Platform", "Vercel", "Render"],
  },
  {
    category: "Generative AI",
    icon: Brain,
    skills: [
      "Anthropic Claude",
      "Google Gemini",
      "OpenRouter",
      "Sarvam AI",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
    ],
  },
  {
    category: "DevOps",
    icon: GitBranch,
    skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD Fundamentals"],
  },
];
