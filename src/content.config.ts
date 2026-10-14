import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every Markdown file in /posts becomes a blog post. The filename is the URL slug.
const blog = defineCollection({
  loader: glob({ base: './posts', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
