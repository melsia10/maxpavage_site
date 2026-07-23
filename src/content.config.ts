import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const realisations = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/realisations' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      location: z.string().optional(),
      tag: z.enum([
        'amenagements-exterieurs-1',
        'terrassements-2',
        'maconneries-3',
        'tapis-de-pierre-6',
      ]),
      cover: image(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string().optional() })).optional(),
    }),
});

export const collections = { realisations };
