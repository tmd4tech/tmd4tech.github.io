# Temidayo Opeoluwa Akanmu — Portfolio (React + Vite + Decap CMS)

A React portfolio site that:
- builds and deploys to **GitHub Pages automatically** (via GitHub Actions), and
- has a real **admin panel at `/admin`** where you edit content in a friendly form and hit save — the change commits to your repo and the site rebuilds. No coding required for edits.

All content lives in plain data files (`src/data/*.json`) and Markdown (`src/content/**`), **never inside the React code** — so a typo in your content can't break the site's design or build.

---

## Part 1 — Get the site live (do this first)

You do **not** build anything locally. GitHub does it for you.

1. **Create the repository.**
   - Personal site at `https://YOURNAME.github.io` → name the repo exactly `YOURNAME.github.io`.
   - Project site at `https://YOURNAME.github.io/portfolio` → name it `portfolio` (or anything).
   - The build detects which case you're in automatically — you don't set the path by hand.

2. **Upload every file** in this folder to the repo (drag-and-drop in the GitHub web UI works, or use `git push`). Keep the folder structure intact — especially `.github/workflows/deploy.yml`.

3. **Turn on Actions-based Pages.**
   
   Repo → **Settings → Pages** → under *Build and deployment*, set **Source: GitHub Actions**. (Not "Deploy from a branch" — this project builds React, so it needs the Action.)

5. **Wait ~2 minutes.** Repo → **Actions** tab shows the build running. When it's green, your site is live at your URL.

That's it for the public site. Every future `git push` (or every admin save) rebuilds and redeploys automatically.

---

## Part 2 — Editing content

Two ways. Pick whichever you prefer; they edit the same files.

### Option A — Edit files directly on GitHub (simplest, always works)

| To change… | Edit this file |
|---|---|
| Name, tagline, email, social links | `src/data/settings.json` |
| About paragraphs, quick facts, education | `src/data/about.json` |
| Experience | `src/data/experience.json` |
| Skills | `src/data/skills.json` |
| Awards & certifications | `src/data/recognition.json` |
| A publication | its file in `src/content/publications/` |
| A project | its file in `src/content/projects/` |

Click the pencil icon on GitHub, edit, commit. The site rebuilds on its own.

**Add a new publication:** copy any file in `src/content/publications/`, rename it (e.g. `5-my-paper.md`), edit the top fields:

```yaml
---
title: "Your paper title"
authors: "T. O. Akanmu, Co-Author"
venue: "Conference / Journal"
proceedings: "IEEE Xplore"   # optional, leave "" if none
status: "Accepted"           # Accepted / Published / Under review / In preparation
year: 2027
order: 5                     # controls order; lower shows first
link: "https://doi.org/..."  # DOI or PDF link
tags:
  - "Tag one"
  - "Tag two"
---
Your abstract or summary goes here as normal text.
```

**Add a new project:** same idea in `src/content/projects/`. The body uses simple Markdown (`### Heading`, `- bullet`).

### Option B — The admin panel at `/admin` (form-based, no files)

Once the OAuth login is set up (Part 3), go to `https://YOUR-SITE/admin`, log in with GitHub, and edit everything through forms — add publications, reorder projects, rewrite the About section. Saving commits to your repo and triggers a rebuild.

> **Note on the admin page:** `/admin` is a standalone static page, separate from the React site.
> - **On your deployed GitHub Pages site**, `https://YOUR-SITE/admin/` loads the admin correctly.
> - **During local `npm run dev`**, the dev server may show the main site at `/admin` instead of the panel — this is a local-only quirk of the dev server and does **not** affect the deployed site. To preview the admin locally, run `npm run build` then `npm run preview` and visit `/admin/` on the preview URL.
> - The admin panel needs the internet (it loads its UI from a CDN) and the OAuth login from Part 3 to actually save.

---

## Part 3 — Enabling admin login (one-time OAuth setup)

The admin panel needs a tiny "OAuth broker" so it can log you into GitHub securely. GitHub Pages can't do this part itself (it's static), so you point Decap at a small free helper. **The site and direct file editing (Option A) work fine without this — only the `/admin` login needs it.**

The simplest free option is a **Cloudflare Worker broker**:

1. **Register a GitHub OAuth App.**
   GitHub → Settings → Developer settings → **OAuth Apps → New OAuth App**.
   - Homepage URL: your site URL.
   - Authorization callback URL: your broker URL + `/callback` (you'll get the broker URL in the next step; you can edit this after).
   - Save the **Client ID** and generate a **Client Secret**.

2. **Deploy a Decap OAuth broker.** Use a maintained one-click template — search "Decap CMS GitHub OAuth Cloudflare Worker" and deploy it, pasting in your Client ID and Secret. It gives you a broker URL like `https://your-broker.workers.dev`.
   (A Netlify-hosted broker works too if you prefer Netlify — same idea.)

3. **Point the admin config at your broker and repo.**
   Open `public/admin/config.yml` and edit the two marked lines:
   ```yaml
   backend:
     name: github
     repo: YOURNAME/YOUR-REPO        # e.g. temidayo/temidayo.github.io
     branch: main
     base_url: https://your-broker.workers.dev
   ```
   Commit. Now `/admin` login works.

If you'd rather skip this entirely, just use Option A — editing files on GitHub does everything the admin panel does.

---

## Optional — Preview locally

You need Node.js 18+ installed.

```bash
npm install
npm run dev        # live preview at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build
```

---

## How it's wired (for the curious)

- **Multi-page via hash routing.** The site has a Home page (`/` — the hero + About) and separate pages for Research (`/#/research`), Projects (`/#/projects`), Experience (`/#/experience`, which also carries awards & certifications), and Skills (`/#/skills`). Hash URLs are used because they never 404 on GitHub Pages, even on refresh or when a deep link is shared. The router is a tiny hook in `src/components/useHashRoute.js` — no routing library needed.
- **Vite + React** builds a fast static site. `vite.config.js` reads `VITE_BASE` so the same code works whether it's a user site or a project site — the GitHub Action computes this for you.
- **Content is decoupled:** `src/content.js` reads the JSON and Markdown at build time (`import.meta.glob`) and hands plain objects to the components. A frontmatter parser in `src/lib/frontmatter.js` (browser-safe, no Node `Buffer` dependency) turns the Markdown files into data.
- **Decap CMS** (`public/admin/`) is the admin UI. Its `config.yml` mirrors the content files field-for-field, so what you edit in the panel is exactly what the site reads.
- **`.github/workflows/deploy.yml`** installs deps, builds, copies `index.html` to `404.html` (so deep links survive a refresh), and publishes to Pages.

## Before you go live — checklist

- [ ] `src/data/settings.json`: real LinkedIn / Scholar / GitHub links.
- [ ] `src/content/publications/*.md`: replace `link: "#"` with real DOI/PDF links as they become available.
- [ ] `public/admin/config.yml`: set `repo:` and (if using the admin) `base_url:`.
- [ ] Settings → Pages → Source = **GitHub Actions**.
