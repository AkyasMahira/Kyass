import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    image: z.string(),
    link: z.string().optional(),
    tech: z.array(z.string()),
    featured: z.boolean().default(false),
    category: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
