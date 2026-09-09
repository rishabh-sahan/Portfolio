export const projects = [
  {
    slug: "pentai",
    title: "PentAI",
    description:
      "An AI-powered application leveraging OpenRouter for multi-model AI access with secure user authentication via Supabase. Features intelligent conversations and seamless user management.",
    overview: [
      "PentAI is an AI chat application built to give users access to multiple large language models through a single, unified interface. Instead of locking users into one model provider, it routes requests through OpenRouter, so conversations can be powered by different underlying models depending on the use case.",
      "Authentication and user management are handled through Supabase, providing secure sign-up/sign-in flows and persistent user sessions. The frontend is built with React and Vite for fast local development and optimized production builds, styled with Tailwind CSS for a clean, responsive interface.",
    ],
    features: [
      "Multi-model AI access via OpenRouter's unified API",
      "Secure authentication and session management with Supabase",
      "Real-time, responsive chat interface",
      "Persisted conversation history per user",
    ],
    techStack: ["React", "Supabase", "OpenRouter API", "Vite", "Tailwind CSS"],
    github: "https://github.com/rishabh-sahan/PentAI",
    live: "https://pent-ai.vercel.app/",
    thumbnail: "pentai",
    screenshots: [],
  },
  {
    slug: "wellness-point",
    title: "Wellness Point",
    description:
      "A scalable MERN-based e-commerce application with Razorpay payment integration, authentication, product management, and responsive UI for health supplement sales.",
    overview: [
      "Wellness Point is a full-featured e-commerce platform built on the MERN stack for a health supplements business. It covers the full commerce lifecycle — product browsing, cart management, secure checkout, and order tracking — backed by a REST API built with Node.js and Express.",
      "Payments are handled through Razorpay's integration, with JWT-based authentication securing user accounts and admin operations. MongoDB stores product catalog, orders, and user data, while the responsive Tailwind CSS frontend ensures a smooth shopping experience across devices.",
    ],
    features: [
      "End-to-end product catalog and cart management",
      "Secure checkout with Razorpay payment integration",
      "JWT-based authentication for customers and admins",
      "Responsive UI optimized for mobile and desktop shopping",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Tailwind CSS",
      "JWT",
    ],
    github: null,
    live: "https://wellness-point.in/",
    thumbnail: "wellness",
    screenshots: [],
  },
  {
    slug: "blueforce",
    title: "BlueForce",
    description:
      "A role-based job portal connecting blue-collar workers with employers. Features JWT authentication, role-specific dashboards, job posting, and application management.",
    overview: [
      "BlueForce is a job portal built to connect blue-collar workers with employers looking to hire for on-ground roles. The platform supports two distinct user types — workers and employers — each with a role-specific dashboard tailored to their workflow.",
      "Employers can post job openings and manage incoming applications, while workers can browse listings and apply directly through the platform. JWT authentication secures access across roles, and the Node.js/Express backend with MongoDB handles job listings, applications, and user data at scale.",
    ],
    features: [
      "Role-based dashboards for workers and employers",
      "Job posting and application management workflows",
      "JWT authentication with role-specific access control",
      "Responsive interface built with Tailwind CSS",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    github: "https://github.com/rishabh-sahan/Blueforce",
    live: "https://blue-force.vercel.app/",
    thumbnail: "blueforce",
    screenshots: [],
  },
];
