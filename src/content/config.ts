import { defineCollection, z } from "astro:content"

const courseCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      image: image(),
      courseContent: z.array(z.string()),
      duration: z.string().optional(),
      requirements: z.array(z.string()).optional(),
      includes: z.array(z.string()).optional()
    })
})

export const collections = { courses: courseCollection }
