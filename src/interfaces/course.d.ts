export type Course = {
  id: number
  title: string
  description: string
  image: string
  courseContent: string[]
  duration: string | undefined
  requirements: string[] | undefined
  includes: string[] | undefined
}
