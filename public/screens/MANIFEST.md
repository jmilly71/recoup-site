# App screens

Real captures from the Rēcoup iOS app, iPhone 17 Pro Max, native 1320x2868 (3x)
PNG. Captured from 1.0.1 (build 26), the version released 2026-08-26. Demo data
shows August with net +$186, fees covered. Illustrative of the product, never a
testimonial.

## Convention
- **Light** cuts: `public/screens/<name>.png`
- **Dark** cuts: `public/screens/dark/<name>.png` (same filenames, mirrored)

The carousel and hero swap light for dark under `prefers-color-scheme: dark`.
Dark cuts are optional per slide: if `dark/<name>.png` is absent, that slide
shows its light capture in both themes.

## Carousel screens
Source: the frameless raw captures in `design/site/screens/` and
`design/site/screens-dark/` in the app repo (`jmilly71/recoup`). Do NOT use
`design/site/raw-v2/`, the framed App Store submission set (bezels, titles, and
captions baked in). The site draws its own rounded card framing.

Wired in `src/config.ts` `realScreens`: 01 through 08. The retired 09 and 10
files are deleted.

| file | screen |
|------|--------|
| 01-welcome | tulip + wordmark + Get started |
| 02-today-hero | dashboard, "August +$186, fees covered" |
| 03-cards-all | all 5 cards, per-card net + engravings |
| 04-card-detail-enrollment | Amex Platinum, Enrollment / Autopilot states |
| 05-year-chart | recoup curve crossing the fee line |
| 06-by-benefit-grid | month-by-month credit grid |
| 07-about-flowers | "The flowers" brand story |
| 08-onboarding | "Which cards do you carry?", step 2 of 6 |

## Hero
`hero-month.png` / `dark/hero-month.png`: the Today dashboard, a second copy of
`02-today-hero` at identical framing (the file name is historical). Native
1320x2868 covers the hero's rendered size, so the old separate 2x assets are
gone and the hero serves the 1x only.

## Shelf life
Anything showing a month or a day count ages. This set says "August" and
"4 days left". Recapture when that reads conspicuously stale, or when the app's
type scale or colors change again. The capture notes live in the app repo at
`design/site/README-screens.md`.
