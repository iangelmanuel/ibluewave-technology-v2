import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import react from "@astrojs/react"
import icon from "astro-icon"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "static",
  site: "https://ibluewavetechnology.com",
  integrations: [react(), icon()]
})
