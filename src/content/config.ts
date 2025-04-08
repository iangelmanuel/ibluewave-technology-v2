import { defineCollection, z } from "astro:content"

const courses = defineCollection({
  type: "content",
  schema: ({ image }) => {
    return z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: z.array(image()),
      tags: z.array(z.string()),
      url: z.string(),
      duration: z.string(),
      level: z.enum(["Principiante", "Intermedio", "Avanzado"]),
      instructor: z.string(),
      instructorUrl: z.string(),
      instructorImage: image()
    })
  }
})

export const collections = { courses }
