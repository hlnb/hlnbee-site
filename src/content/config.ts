import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string()
		}),
		tags: z.array(z.string()),
		category: z.array(z.string())
	})
});

export const collections = { writings };