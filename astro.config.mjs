import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import netlify from "@astrojs/netlify/edge-functions";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), image()],
  output: "server",
  adapter: netlify(),
});
