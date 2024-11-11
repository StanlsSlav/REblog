import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { URL_PREFIX, IS_PROD, PROD_URL, DEV_URL } from "./src/consts";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

const site = IS_PROD ? PROD_URL : DEV_URL;

// https://astro.build/config
export default defineConfig({
  site: site,
  base: URL_PREFIX,
  integrations: [mdx(), sitemap(), svelte()],
});
