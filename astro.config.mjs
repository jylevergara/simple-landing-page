import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jylevergara.github.io/', // Required for sitemap -> Replace with your site's URL
	output: 'hybrid',
	integrations: [tailwind(), sitemap()],
	adapter: vercel(),
});
