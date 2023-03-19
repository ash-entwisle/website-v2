import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";
import solidJs from "@astrojs/solid-js";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";

import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import sitemap from "astro-sitemap";
import mdx from "@astrojs/mdx";
import AstroPWA from '@vite-pwa/astro'


// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://ashentwisle.com",
  adapter: cloudflare(),
  integrations: [
    solidJs(), 
    partytown(), 
    prefetch(), 
    compress(), 
    mdx(), 
    sitemap({
      customPages: [
        'https://ashentwisle.com/',
        'https://ashentwisle.com/404',
        'https://ashentwisle.com/about',
        'https://ashentwisle.com/blog',
        'https://ashentwisle.com/contact',
        'https://ashentwisle.com/projects',
      ],
    }), 
//  robotsTxt(), 
//  AstroPWA(), // smh have to do this manually
  ]
});