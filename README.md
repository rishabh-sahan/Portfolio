# Portfolio

Personal portfolio site for Rishabh Jain — built with React 19, Vite, and Tailwind CSS v4.
Live at [rishabh-jain.me](https://www.rishabh-jain.me/).

## Stack

- **React 19** + **Vite** — app shell and build tooling
- **React Router** — client-side routing (`/`, `/projects`, `/project/:slug`)
- **Tailwind CSS v4** — styling (CSS-first config in `src/index.css`)
- **lucide-react** — icons
- Deployed on **Vercel** with a custom domain

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Project structure

```
src/
  assets/         static images (portraits, project screenshots)
  components/     reusable UI pieces (Button, Navbar, ProjectCard, ContactForm, ...)
  data/           content as data (profile, projects, skills, education, experience, certifications)
  hooks/          useTheme, useScrollShrink, useActiveSection, useScrollToHash
  pages/          route-level pages (Home, ProjectsPage, ProjectDetail)
  sections/       homepage sections (Hero, About, Education, Experience, Skills, Projects, Certifications, Resume, Contact)
```

Content (bio, projects, skills, education, experience, certifications) lives entirely in `src/data/*.js` — update those files rather than the components to change what's shown on the site.

## Contact form

The contact form in the Contact section posts to Formspree. Set your own endpoint in
`src/components/ContactForm.jsx` (`FORMSPREE_ENDPOINT`) — see the comment above it for the
2-minute setup at [formspree.io](https://formspree.io).

## Deployment

Deployed on Vercel. `vercel.json` includes a rewrite so client-side routes (e.g. `/project/project-name`)
resolve correctly on direct navigation/refresh instead of 404ing.
