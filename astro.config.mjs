// @ts-check
import { defineConfig } from "astro/config"
import { fileURLToPath } from "url"

import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@sections": fileURLToPath(new URL("./src/sections", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@interfaces": fileURLToPath(
          new URL("./src/interfaces", import.meta.url)
        ),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
        "@constant": fileURLToPath(new URL("./src/constant", import.meta.url)),
        "@images": fileURLToPath(
          new URL("./src/assets/images", import.meta.url)
        )
      }
    }
  },

  integrations: [react(), icon()]
})
