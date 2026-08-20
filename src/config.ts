/**
 * Single place for everything that will change when the app ships.
 * Set a value and the site updates everywhere it's used.
 */
export const site = {
  name: 'Rēcoup',
  tagline: 'Make sure your cards pay you.',
  description:
    'Rēcoup tracks the statement credits and perks on your premium credit cards against their annual fees, privately and entirely on your iPhone.',

  supportEmail: 'jmilly@me.com',
  bundleId: 'com.jmilly.recoup',

  /**
   * The App Store link. Live as of 2026-08-20. The id-only form is deliberate:
   * it returns 200 and redirects to the slug URL, survives any future slug
   * change, and avoids percent-encoding the macron in "Rēcoup". One of two
   * launch gates; the badge shows only when this is set AND `launchState` is
   * 'launched' (see the `isLaunched` guard).
   */
  appStoreUrl: 'https://apps.apple.com/us/app/id6789943575' as string | null,

  /**
   * POST endpoint for the email signup (Buttondown, same provider as the
   * Pillot site). This posts to the main list; `emailSignupTag` sorts Rēcoup
   * signups within it, so no paid separate-list feature is needed. When the
   * endpoint is set the pill submits here in a new tab; if it is ever null, the
   * pill falls back to a mailto so the button still works.
   */
  emailSignupEndpoint: 'https://buttondown.com/api/emails/embed-subscribe/jmilly' as string | null,

  /**
   * Tag applied to signups from this site so they are filterable inside the
   * shared Buttondown list. Sent as a hidden `tag` field. Set to null to omit.
   */
  emailSignupTag: 'recoup' as string | null,

  privacyEffectiveDate: 'July 12, 2026',
} as const;

/**
 * The launch switch. Call sites read the derived `isLaunched` below, never
 * this value directly.
 * - 'prelaunch': the app is in TestFlight, so CTAs capture emails.
 * - 'launched': every CTA swaps to the App Store badge, but only once
 *   `site.appStoreUrl` is also set (see the `isLaunched` guard).
 *
 * Launched 2026-08-20: both gates are set (this is 'launched' and
 * `site.appStoreUrl` holds the live link), so every CTA now shows the App Store
 * badge instead of the email signup.
 */
export const launchState: 'prelaunch' | 'launched' = 'launched';

/**
 * The one gate the whole site reads. True only when we're launched AND have a
 * real store URL, so an empty `appStoreUrl` can never render a dead button.
 */
export const isLaunched = launchState === 'launched' && Boolean(site.appStoreUrl);

/**
 * The launch card catalog, shown as pills in the "fee posts once a year"
 * section. Names as they appear in the app. Five cards at launch.
 */
export const launchCards = [
  { issuer: 'American Express', name: 'The Platinum Card' },
  { issuer: 'American Express', name: 'American Express Gold' },
  { issuer: 'American Express', name: 'Delta SkyMiles Reserve' },
  { issuer: 'Chase', name: 'Sapphire Reserve' },
  { issuer: 'Chase', name: 'Sapphire Preferred' },
] as const;

/**
 * App screens for the "See where every card stands" carousel, looping
 * right-to-left. Eight frameless raw captures (1320×2868 PNG) in numbered slide
 * order, sourced from design/site/screens (NOT design/site/raw-v2, the framed
 * App Store set). They live in `public/screens/`; the site supplies its own
 * rounded card framing. Screens show demo data ("Alex", +$244), so alt text
 * stays illustrative, never testimonial.
 */
export const realScreens = [
  { file: '01-welcome.png', alt: 'Rēcoup welcome screen: an engraved tulip above the Rēcoup wordmark and a Get started button' },
  { file: '02-today-hero.png', alt: 'Rēcoup dashboard with demo data: July up $244, fees covered' },
  { file: '03-cards-all.png', alt: 'All five launch cards, each with its own engraving and per-card net' },
  { file: '04-card-detail-enrollment.png', alt: 'Card detail showing per-benefit enrollment: not enrolled, enrolled, and autopilot, with a service picker' },
  { file: '05-year-chart.png', alt: 'Year view with the recoup curve crossing the annual fee line' },
  { file: '06-by-benefit-grid.png', alt: 'Month-by-month grid of credits by benefit' },
  { file: '07-about-flowers.png', alt: 'The brand story screen pairing each card with an engraved bloom' },
  { file: '08-onboarding.png', alt: 'Onboarding: which cards do you carry, showing the five launch cards' },
] as const;

/**
 * The screen shown inside the hero iPhone: the Today dashboard. Real captures
 * live at /screens/hero-month.png and /screens/dark/hero-month.png (the file
 * name is historical; the capture is the dashboard).
 */
export const heroScreen = {
  src: '/screens/hero-month.png',
  src2x: '/screens/hero-month-light-2x.png',
  srcDark: '/screens/dark/hero-month.png',
  srcDark2x: '/screens/dark/hero-month-dark-2x.png',
  alt: 'Rēcoup dashboard with demo data: July recouped $244, fees covered',
} as const;
