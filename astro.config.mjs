// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical origin drives the canonical <link>, og:url, og:image, the Twitter
// card (Base.astro), and the generated sitemap. Served from a Cloudflare
// Workers static-assets deployment at this domain.
export default defineConfig({
  site: 'https://recoupbenefits.app',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // Inline every stylesheet into the HTML. Separate CSS requests are dropped
    // by some corporate SSL-inspection proxies (e.g. Z-Scaler), which leaves
    // pages unstyled; inlined styles ride inside the document instead.
    inlineStylesheets: 'always',
  },
});
