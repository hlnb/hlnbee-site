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
		author: z.string().optional(),
		tags: z.array(z.string().optional()).optional(),
		category: z.array(z.string().optional()).optional()
	})
});

export const collections = { writings };