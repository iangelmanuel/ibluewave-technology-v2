import { defineConfig } from "astro/config"
import path from "path"
import { fileURLToPath } from "url"

import tailwindcss from "@tailwindcss/vite"
import react from "@astrojs/react"
import icon from "astro-icon"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@sections": path.resolve(__dirname, "./src/sections"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@interfaces": path.resolve(__dirname, "./src/interfaces"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@lib": path.resolve(__dirname, "./src/lib"),
        "@constant": path.resolve(__dirname, "./src/constant"),
        "@images": path.resolve(__dirname, "./src/assets/images")
      }
    }
  },
  integrations: [react(), icon()]
})
