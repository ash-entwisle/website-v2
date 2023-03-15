import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import sitemap from "astro-sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [solidJs(), partytown(), prefetch(), robotsTxt(), compress(), sitemap(), mdx()]
});