import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://geturnet.github.io",
  base: "/islamic-online-app",
  srcDir: "./template/src",
  publicDir: "./public",
  output: "static",
  integrations: [react(), tailwind()],
});
