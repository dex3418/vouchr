import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { loadDirectory } from "./api/_directory.js"

const ROUTES = ["/", "/articles", "/privacy", "/terms"]
const ARTICLES_DB = "42a6bb268e244e7ab18af5ebf4175c0c"

// SITE_URL (optional env var, for a custom domain) wins. On Vercel the production domain is used.
const siteUrl = () =>
  (process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "")).replace(/\/$/, "")

// Published article slugs for the sitemap. Best effort: skipped if Notion is not reachable at build time.
async function articleSlugs() {
  const token = process.env.NOTION_TOKEN
  if (!token) return []
  try {
    const res = await fetch(`https://api.notion.com/v1/databases/${ARTICLES_DB}/query`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
      body: JSON.stringify({ filter: { property: "Published", checkbox: { equals: true } }, page_size: 100 }),
    })
    if (!res.ok) return []
    const data = await res.json()
    return data.results.map((r) => (r.properties.Slug?.rich_text || []).map((t) => t.plain_text).join("")).filter(Boolean)
  } catch {
    return []
  }
}

// Directory listing slugs for the sitemap. Empty until DIRECTORY_DB_ID is set and listings are published.
async function directorySlugs() {
  try {
    return (await loadDirectory()).map((x) => x.slug)
  } catch {
    return []
  }
}

// Fills __SITE_URL__ in index.html and writes robots.txt and sitemap.xml at build time.
function seoFiles() {
  return {
    name: "seo-files",
    transformIndexHtml: { order: "pre", handler: (html) => html.replaceAll("__SITE_URL__", siteUrl()) },
    async generateBundle() {
      const site = siteUrl()
      this.emitFile({ type: "asset", fileName: "robots.txt", source: `User-agent: *\nAllow: /\nDisallow: /api/\n${site ? `\nSitemap: ${site}/sitemap.xml\n` : ""}` })
      if (!site) return
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...ROUTES, ...(await articleSlugs()).map((x) => `/articles/${x}`), ...(await directorySlugs()).flatMap((x, i) => [...(i === 0 ? ["/directory"] : []), `/directory/${x}`])].map((u) => `  <url><loc>${site}${u}</loc></url>`).join("\n")}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig({ plugins: [react(), seoFiles()] })
