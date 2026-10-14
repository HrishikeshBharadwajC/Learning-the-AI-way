# Learning the AI Way

Source for [learningtheaiway.com](https://learningtheaiway.com), a blog about using AI in daily life as an AI engineer.

Posts are plain Markdown files in [`posts/`](posts). Push to `main` and GitHub Actions builds the site with [Astro](https://astro.build) and publishes it to GitHub Pages.

## Write a post

**From the GitHub website:** open `posts/`, click **Add file → Create new file**, name it `my-post-title.md`, paste the front matter below, write, and commit to `main`. The site updates in about a minute.

**Locally:**

```bash
npm install
npm run new -- "My post title"   # creates posts/my-post-title.md as a draft
npm run dev                      # preview at http://localhost:4321 (drafts are visible here)
```

Every post starts with front matter:

```yaml
---
title: My post title
description: One sentence shown under the title and in link previews.
date: 2026-10-14
tags: [everyday-ai, tools]
draft: false        # true keeps it off the live site
---
```

- The filename is the URL: `posts/my-post-title.md` → `/blog/my-post-title/`.
- Images go in `public/images/` and are referenced as `/images/name.png`.
- Files starting with `_` (like `posts/_template.md`) are ignored.

## Edit your details

Name, bio, LinkedIn and website links live in [`src/site.config.ts`](src/site.config.ts).

## Project layout

```
posts/                Markdown blog posts (this is where you write)
public/               Static files served as-is (CNAME, favicon, images)
src/site.config.ts    Site title, author bio and links
src/pages/            Routes: home, /blog, /about, /tags, RSS
src/layouts/          Page shell (head, meta tags, header, footer)
src/components/       Header, footer, post list
src/styles/global.css Design tokens, typography, light and dark themes
```

## Commands

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Local dev server with live reload              |
| `npm run build`   | Type-check and build the static site to `dist/` |
| `npm run preview` | Serve the built site locally                   |
| `npm run new`     | Create a new draft post                        |

## Hosting setup (one time)

1. **Repo → Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. At your domain registrar, add DNS records for `learningtheaiway.com`:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `hrishikeshbharadwajc.github.io`
3. Back in **Settings → Pages**, set the custom domain to `learningtheaiway.com` and tick **Enforce HTTPS** once the certificate is issued.
