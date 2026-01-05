# Tailwind v4 → CSS Converter

Minimal static web app that converts Tailwind utility class strings to plain CSS in the browser. This guide shows how to host it publicly and add basic SEO/share metadata.

## Quick test locally
1) Open `index.html` in your browser, or run a lightweight server (prevents clipboard/security quirks):
   - Python: `python -m http.server 8000`
   - Node: `npx serve .`
2) Visit `http://localhost:8000` (or the printed URL).

## Deploy options (static hosting)
Pick one of these (no backend required):

- **GitHub Pages**
  1) Commit `index.html` (and README).
  2) Create branch `gh-pages` with these files at repo root.
  3) In repo Settings → Pages, select `gh-pages` / root. Wait for publish.
  4) Site will be at `https://<user>.github.io/<repo>/`.

- **Netlify (drag/drop)**
  1) Zip the folder or just drop the folder on https://app.netlify.com/drop.
  2) Netlify gives a live URL. Add a custom domain in Site settings → Domain management if desired.

- **Netlify (repo connect)**
  1) Connect your repo, pick the branch with `index.html` in root.
  2) Build command: *leave empty* (no build). Publish directory: `.`

- **Vercel**
  1) Connect the repo and import.
  2) Framework preset: "Other". Build command: `-` (or leave empty). Output dir: `.`

- **Cloudflare Pages**
  1) Create a project, connect the repo.
  2) Build command: leave empty. Build output directory: `.`

Any static host/CDN works as long as it serves `index.html` from the root.

## Basic SEO & social sharing
Add the following to `<head>` in `index.html` (adjust text to your preference):
```html
<title>Tailwind v4 → CSS Converter</title>
<meta name="description" content="Convert Tailwind v4 utility classes to vanilla CSS instantly in your browser." />
<link rel="canonical" href="https://your-domain.com/" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Tailwind v4 → CSS Converter" />
<meta property="og:description" content="Convert Tailwind utility classes to CSS, live." />
<meta property="og:url" content="https://your-domain.com/" />
<meta property="og:image" content="https://your-domain.com/og-image.png" />

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Tailwind v4 → CSS Converter" />
<meta name="twitter:description" content="Convert Tailwind utility classes to CSS, live." />
<meta name="twitter:image" content="https://your-domain.com/og-image.png" />
```

### Robots and sitemap
- Create `robots.txt` at the site root to allow indexing:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://your-domain.com/sitemap.xml
  ```
- Sitemap (optional for a single page): a simple XML listing `https://your-domain.com/` is enough. Many hosts can auto-generate; otherwise drop a `sitemap.xml` alongside `index.html`.

### Performance and meta tips
- Keep the page single-file; it already runs client-side only.
- Use a small `og-image.png` (1200×630) for link previews.
- Ensure the canonical URL matches the final public URL.
- If you add analytics, prefer a privacy-friendly, script-light option (e.g., Plausible/Umami) and load it defer.

## Custom domain
- Point your domain to the host per their docs (CNAME/A records). Examples:
  - GitHub Pages: CNAME to `<user>.github.io`; add `CNAME` file containing your domain.
  - Netlify/Vercel/Cloudflare: add domain in dashboard; they provide DNS targets.

## Updating the site
- Edit `index.html`, commit, and push to the branch your host is watching (`gh-pages` or `main`).
- Most hosts redeploy automatically on push. For drag/drop Netlify, re-drop the folder.

## What this app does
- Converts Tailwind utility class strings to vanilla CSS in-browser.
- Supports common scales, arbitrary values (`w-[420px]`, `bg-[color]/50`), and a simple light/dark theme.
- No server, no build step.

## Troubleshooting
- Clipboard issues locally: use a local server instead of `file://`.
- If colors with slash opacity look off in old browsers, `color-mix()` fallback may not be supported; consider sticking to hex/rgba inputs for maximum compatibility.
