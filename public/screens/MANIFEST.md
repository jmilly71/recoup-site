# App screens

Real captures from the Rēcoup iOS app, iPhone 17 Pro Max, native 1320×2868 (3x)
PNG. Demo persona "Alex", net +$244, illustrative of the product, never a
testimonial.

## Convention
- **Light** cuts: `public/screens/<name>.png`
- **Dark** cuts: `public/screens/dark/<name>.png` (same filenames, mirrored)

Swap `/screens/X.png` to `/screens/dark/X.png` under `prefers-color-scheme: dark`
(mirror the light/dark handling already used for the magnolia bloom art).

## Carousel screens
Source: the 8 frameless raw captures in `design/site/screens/` (numbered slide
order). Do NOT use `design/site/raw-v2/`, which is the framed App Store
submission set (bezels, titles, and captions baked in). The site draws its own
rounded card framing and section heading, so the carousel wants clean frameless
screens.

Wired in `src/config.ts` `realScreens`: 01 through 08 (8 slides). `09-your-cards`
and `10-claim-drawer` are retired from the carousel.

| file | screen |
|------|--------|
| 01-welcome | tulip + wordmark + Get started |
| 02-today-hero | dashboard, "July +$244, fees covered" |
| 03-cards-all | all 5 cards, per-card net + engravings |
| 04-card-detail-enrollment | Enrollment / Autopilot + service picker |
| 05-year-chart | recoup curve crossing the fee line |
| 06-by-benefit-grid | month-by-month credit grid |
| 07-about-flowers | "The flowers" brand story |
| 08-onboarding | "Which cards do you carry?" |

Dark cuts are optional per slide: if `dark/<name>.png` is absent, that slide
shows its light capture in both themes.

## Hero
The month view, the Today dashboard ("July +$244, fees covered"), same capture
as `02-today-hero`. Replaces the interim `hero-month.svg`.

- `hero-month.png` / `dark/hero-month.png`: 1× (1320×2868)
- `hero-month-light-2x.png` / `dark/hero-month-dark-2x.png`: 2× (2640×5736), for
  a large or retina hero

Prefer the 2× files for the hero (use `srcset` with the 1× as fallback, or point
`heroScreen.src` straight at the 2× and let the frame scale it down). Swap the
light and dark pair on `prefers-color-scheme: dark`.
