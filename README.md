# Rēcoup site

Marketing, support, and privacy site for **Rēcoup**, the private, on-device iOS app
that tracks premium-card credits and perks against their annual fees
(`com.jmilly.recoup`).

Built with [Astro](https://astro.build) as a fully static site. It ships **zero
JavaScript**, sets no cookies, and runs no analytics, matching the app's
privacy story. The Hanken Grotesk font is self-hosted (no Google Fonts requests), and
light/dark mode follows the visitor's system preference.

## Pages

| Route      | Purpose                                                              |
| ---------- | -------------------------------------------------------------------- |
| `/`        | Landing page: animated hero, launch lineup, how it works, privacy story, screens carousel, email signup |
| `/support` | Support URL for App Store Connect: contact, FAQ, bug reports          |
| `/privacy` | Privacy policy ("Data Not Collected", on-device SQLite, no third parties) |
| `/404`     | Not-found page                                                        |

## Working locally

```bash
cd recoup-site
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
```

## The one file to edit when things ship: `src/config.ts`

- **`appStoreUrl`**: set this once the app is live and every CTA switches from
  the "Coming soon" pill to a Download-on-the-App-Store badge. (At that point
  you can also swap in [Apple's official badge artwork](https://developer.apple.com/app-store/marketing/guidelines/)
  in `src/components/AppStoreCta.astro` if you prefer it over the hand-built one.)
- **`testFlightUrl`**: optional public TestFlight invite link; renders a
  "Join the beta" link wherever the CTA appears.
- **`screenshots`**: the landing-page screenshot list (see below).
- Support email, bundle ID, and the privacy policy's effective date also live here.

## Swapping in real screens and artwork

1. Export iPhone screens at ~1320×2868 (status bar included).
2. Drop them in `public/screens/` and list them in `carouselScreens` in
   `src/config.ts` with real alt text. Point `heroScreen` at the month-picker
   capture (it renders inside the hero iPhone).
3. Commit the engraved magnolia to `public/art/magnolia.png`. The closing card
   picks it up automatically on the next build (the line-drawn peony is the
   fallback until then).
4. Set `emailSignupEndpoint` in `src/config.ts` and the signup pill switches
   from the mailto fallback to a real POST form.

The `placeholder-*.svg` files can be deleted once real captures exist.

## Deploying (Vercel, matching this repo's convention)

1. Vercel → **Add New → Project** → import this repo.
2. Set **Root Directory** to `recoup-site`. Vercel auto-detects Astro
   (`astro build` → `dist/`). No environment variables needed.
3. In **Settings → Git**, enable *"Only build if there are changes in the Root
   Directory"*.

### When a custom domain is chosen

Set `site` in `astro.config.mjs` (e.g. `site: 'https://recoup.app'`). That turns
on canonical URLs and absolute `og:image` tags; both are intentionally omitted
while the final URL is unknown.

## Static assets

`public/og.png` (1200×630 social card) and `public/apple-touch-icon.png` were
rendered from the site's own design tokens via headless Chromium; regenerate
with any tool at those sizes if the brand changes. `public/favicon.svg` adapts
to light/dark automatically.
