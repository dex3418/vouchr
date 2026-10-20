import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const ROUTES = ["/", "/privacy", "/terms"]

// SITE_URL (optional env var, for a custom domain) wins. On Vercel the production domain is used.
const siteUrl = () =>
  (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "")).replace(/\/$/, "")

// Fills __SITE_URL__ in index.html and writes robots.txt and sitemap.xml at build time.
function seoFiles() {
  return {
    name: "seo-files",
    transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("__SITE_URL__", siteUrl()) },
    generateBundle() {
      const site = siteUrl()
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ""}` })
      if (!site) return
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map((u) => `  <url><loc>${site}${u}</loc></url>`).join("\n")}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({ plugins: [react(), seoFiles()] })
