// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import icon from "astro-icon";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Quicksand",
      cssVariable: "--font-quicksand",
      weights: ["300 700"],
      styles: ["normal"],
    },
  ],
  site: "https://calapigomusic.com",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), react(), icon()],
});
