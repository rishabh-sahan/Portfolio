import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Brain,
  GitBranch,
  Wrench,
} from "lucide-react";

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Tailwind CSS",
      "Responsive Web Design",
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    category: "Cloud",
    icon: Cloud,
    skills: ["AWS", "Google Cloud Platform"],
  },
  {
    category: "AI / Machine Learning",
    icon: Brain,
    skills: [
      "OpenAI APIs",
      "Prompt Engineering",
      "AI Integrations",
      "LLM Applications",
    ],
  },
  {
    category: "DevOps",
    icon: GitBranch,
    skills: ["Docker", "Git", "GitHub", "Linux", "CI/CD Fundamentals"],
  },
  {
    category: "Tools",
    icon: Wrench,
    skills: ["VS Code", "Postman", "Figma", "npm", "Vite"],
  },
];
