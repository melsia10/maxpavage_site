// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.maxpavage.be',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  redirects: {
    // Anciennes URLs Odoo — le vrai 301 est fait par nginx (deploy/nginx.conf),
    // ceci n'est qu'un filet de sécurité pour les autres hébergements
    '/our-services': '/',
    '/nos-réalisation': '/blog/realisations-3',
    '/contact': '/contactus',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy') && !page.includes('/merci'),
    }),
  ],
});
