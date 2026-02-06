# Portfolio

Personal portfolio site for Bolla Shiva Shankar, built with Next.js App Router and Tailwind CSS. Sections include Hero, About, Work Experience, Projects, Skills, and Experience, with content driven from `src/constants/index.js`.

## Features
- Section-based single-page layout with anchor navigation
- Data-driven content from `src/constants/index.js`
- Motion and micro-interactions with Framer Motion and GSAP
- Responsive layout with Tailwind CSS v4
- Resume download from `public/resume.pdf`

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion, GSAP
- Lucide React icons

## Project Structure
- `src/app` — App Router entry (`layout.js`, `page.js`, `globals.css`)
- `src/components` — UI sections (Hero, About, Projects, Skills, Experience, WorkExperience, FloatingDock)
- `src/constants/index.js` — portfolio data (profile, skills, projects, experience)
- `public` — static assets and `resume.pdf`

## Getting Started
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build and Run
```bash
npm run build
npm run start
```

## Deploy on Netlify
This repo includes `netlify.toml` with the Next.js plugin.

1. Create a new site in Netlify and connect this repo.
2. Build command: `npm run build`
3. Publish directory: `.next`

If you need to customize build settings or environment variables, edit `netlify.toml`.

## Content Updates
- Update personal/profile data in `src/constants/index.js`.
- Edit section layout in `src/components`.
- Adjust global styles in `src/app/globals.css`.
