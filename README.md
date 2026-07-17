# Arvind Mohan — personal research website

A fast, static personal website built with [Astro](https://astro.build/) and deployed through GitHub Pages. It presents research in scientific AI, physics-informed machine learning, and disaster resilience. The site is personal and does not represent any employer or affiliated institution.

## Local development

Use Node.js 22 (`.nvmrc` is included):

```bash
nvm use
npm install
npm run dev
```

Open `http://localhost:4321`. Before committing, run:

```bash
npm run build
```

The production site is generated in `dist/`.

## Edit content

- Home and biography: `src/pages/index.astro`
- Research themes: `src/pages/research.md`
- Publications, talks, and contact: `src/pages/publications.md`
- Personal activities and photo galleries: `src/pages/outside-work.md`
- Name, email, profile links, navigation, and footer disclaimer: `src/data/site.ts`
- Global visual design: `src/styles/global.css`

The main public routes are `/`, `/research/`, `/publications/`, and `/outside-work/`. Most prose is ordinary Markdown; the home page uses Astro markup for its richer layout.

## Add a publication

Edit the numbered list under **Selected publications** in `src/pages/publications.md`. Keep newest entries first and use this format:

```markdown
1. **Paper title.** *Journal Name* volume (year). [DOI](https://doi.org/...)
```

Use only publicly released links and approved content.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys every push to `main`.

1. Push the repository to GitHub.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
3. Push to `main` or run the workflow manually from the Actions tab.

The configured production URL is `https://arvindmohan.github.io`. If the repository name or domain changes, update `site` in `astro.config.mjs`.
