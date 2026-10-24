import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// SITE_URL (optional env var, for a custom domain) wins. On Vercel the production domain is used.
const siteUrl = () =>
  (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "")).replace(/\/$/, "")

// Fills __SITE_URL__ in index.html and writes robots.txt at build time.
// The sitemap is not built here: /sitemap.xml is served live by api/sitemap.js so new content appears without a redeploy.
function seoFiles() {
  return {
    name: "seo-files",
    transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("__SITE_URL__", siteUrl()) },
    generateBundle() {
      const site = siteUrl()
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\nDisallow: /api/\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ""}` })
    },
  }
}

export default defineConfig({ plugins: [react(), seoFiles()] })
