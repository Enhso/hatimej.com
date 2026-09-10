// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://ht.me",
    trailingSlash: "never",
    build: { format: "file" },
    markdown: {
        shikiConfig: { theme: "github-light", wrap: true },
    },
});
