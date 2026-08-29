# Launch status and remaining work (Rēcoup site)

A plain checklist that survives session resets. This is the static marketing
site for the Rēcoup iOS app.

## Status: LAUNCHED (2026-08-20)

Rēcoup is live on the App Store (United States only, iPhone, iOS 16.4 and up).
The site is in launched mode: every call to action (header, hero, closing card)
shows Apple's official "Download on the App Store" badge, linking to
https://apps.apple.com/us/app/id6789943575 (the id-only form, which survives a
slug change and avoids encoding the macron in "Rēcoup"). The email signup is no
longer shown.

The switch lives in `src/config.ts`: `launchState` is 'launched' and
`site.appStoreUrl` holds the live link. To pull the site back to email capture
(for example if the listing is ever withdrawn), set `launchState` to
'prelaunch'.

## The badge

Both of Apple's official US lockups, inlined verbatim and never redrawn or
recolored:

- `src/assets/app-store-badge.svg`: the black lockup, fetched directly from
  developer.apple.com, shown on light surfaces.
- `src/assets/app-store-badge-white.svg`: the white lockup (white face, black
  keyline and text, Apple's variant for dark backgrounds), shown on dark
  surfaces. Sourced from a package that vendors Apple's localized badge set;
  authenticity was verified before use (its black sibling is path-for-path
  identical to Apple's own file, and the white file carries Apple's export
  marker and matching frame geometry).

The swap follows `prefers-color-scheme` and honors an explicit `data-theme`
override, the same pattern as the app screenshots. At 165px wide the badge sits
above Apple's 40px minimum with more than quarter-height clear space around it.

## Still to do

Nothing is open right now.

- DONE 2026-08-29: screenshots re-shot. All 17 assets (8 light, 8 dark, dark
  hero; the light hero is the same capture as the light Today slide) now come
  from 1.0.1 build 26, released 2026-08-26, pulled from the app repo
  (`jmilly71/recoup`, commit 6857077, `design/site/screens` and
  `screens-dark`). Alt text and `public/screens/MANIFEST.md` updated to match
  (August, net +$186, Amex Platinum on slide 04). The retired 09/10 files and
  the stale hero 2x assets were deleted; the hero serves the native 1320x2868
  capture, which covers its rendered size.
- Shelf life to watch: the captures say "August" and "4 days left". Recapture
  when that reads stale or when the app's type or colors change again (notes in
  the app repo at `design/site/README-screens.md`).

## Already verified on 2026-08-20 (no action needed)

- Copy is current. The site does not quote the renamed onboarding step.
- Type scale is the site's own, with body text at 17px. It does not inherit the
  app's old "reads small" problem.
- Color contrast passes WCAG AA everywhere, measured rather than assumed: light
  body grey 5.21:1, dark body grey 7.16:1, footer 6.28:1, headings above the
  floor.
- Dark mode is shown through the dark screenshots and dark page surfaces, not
  claimed in copy.
- The closing card carries a one-line availability note under the badge ("For
  iPhone, on the U.S. App Store."), so a visitor outside the United States is
  not sent to a dead App Store page.

## Where this lives

Source of record: repo `jmilly71/jmd-projects`, folder `recoup-site/`, branch
`claude/recoup-landing-site-eymgeh`. The production site is a separate repo
(`jmilly71/recoup-site`) deployed on Cloudflare; changes here are mirrored there.
