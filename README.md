# andycodes.dev

Personal site for andycodes. Astro, static output, no client framework.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

- Content lives in `src/data/site.ts`; the hero and about copy are in `src/pages/index.astro`.
- The logo (`src/components/Logo.astro`, `public/favicon.svg`) is the editor minimap of the `andy()` function in the hero.
- `brand/` holds the source logo and the 1024 px profile picture used on GitHub, X and Reddit. `x-banner.png` (1500×500) is the X header. None of it is part of the built site.

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`). The custom domain comes from `public/CNAME`.
