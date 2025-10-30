import { z } from 'zod'

const envSchema = z.object({
  VITE_VIDEO_URLS: z.string().nullable(),
})

export const env = envSchema.parse(import.meta.env)

// If VITE_VIDEO_URLS is not set, set it to an empty string
if (env.VITE_VIDEO_URLS === null) {
  env.VITE_VIDEO_URLS = ''
}
