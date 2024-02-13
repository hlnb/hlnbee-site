import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://hlnb.github.io',
	base: '/helenbee-site',
	integrations: [mdx(), sitemap()],
});
