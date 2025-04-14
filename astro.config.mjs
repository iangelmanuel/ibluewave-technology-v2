// @ts-check
import { defineConfig } from "astro/config"

import tailwindcss from "@tailwindcss/vite"

import react from "@astrojs/react"

import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@layouts/*": "./src/layouts/*",
        "@pages/*": "./src/pages/*",
        "@sections/*": "./src/sections/*",
        "@components/*": "./src/components/*",
        "@interfaces/*": "./src/interfaces/*",
        "@styles/*": "./src/styles/*",
        "@lib/*": "./src/lib/*",
        "@constant/*": "./src/constant/*",
        "@images/*": "./src/assets/images/*"
      }
    }
  },

  integrations: [react(), icon()]
})
