// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://hatimej.com",
    trailingSlash: "never",
    build: { format: "file" },
    markdown: {
        // Records are mirrored verbatim; smartypants would rewrite their quotes and ellipses.
        smartypants: false,
        shikiConfig: { theme: "github-light", wrap: true },
    },
});
