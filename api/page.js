import { DB, queryPublished, getBlocks, getText, getSelect, getDate } from "./_notion.js"
import { loadDirectory } from "./_directory.js"
import { renderHead } from "./_page.js"
import { siteUrl, originOf } from "./_site.js"

// Serves the site's index.html with the right title, description and preview tags for article and directory pages.
// The React app then loads exactly as before. If anything here fails, the visitor is sent to the plain page (?raw=1), so pages never break.
const DEFAULT_DESC = "Vouchr connects job seekers, skill learners and local businesses in Dantewada, Sukma and Bijapur (Bastar, Chhattisgarh). Register with a short form."
const CODE = { Hindi: "hi", English: "en" }
const full = (t) => (t ? `${t} | Vouchr` : "Vouchr | Local jobs and skills in Dantewada, Sukma and Bijapur")

const LISTS = {
  articles: { path: "/articles", title: "Guides and articles", description: "Practical guides on jobs, skills and local business in Dantewada, Sukma and Bijapur, from Vouchr." },
  directory: { path: "/directory", title: "Directory", description: "Skill training, job and business listings in Dantewada, Sukma and Bijapur. Filter by district, qualification, subject and fee." },
}

async function articleMeta(slug, site) {
  const rows = await queryPublished(DB.articles, [], { property: "Slug", rich_text: { equals: slug } })
  if (!rows[0]) return null
  const p = rows[0].properties
  const title = getText(p.Title)
  const language = CODE[getSelect(p.Language)] || "en"
  let description = getText(p.Summary)
  if (!description) {
    const blocks = await getBlocks(rows[0].id)
    const first = blocks.find((b) => b.type === "paragraph" && b.paragraph.rich_text.length)
    description = first ? first.paragraph.rich_text.map((r) => r.plain_text).join("").slice(0, 155) : ""
  }
  return {
    title: full(title),
    description: description || DEFAULT_DESC,
    url: `${site}/articles/${encodeURIComponent(slug)}`,
    type: "article",
    locale: language === "hi" ? "hi_IN" : "en_IN",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      datePublished: getDate(p.Date) || undefined,
      inLanguage: language === "hi" ? "hi" : "en-IN",
      author: { "@type": "Organization", name: "Vouchr" },
      publisher: { "@type": "Organization", name: "Vouchr" },
      articleSection: getSelect(p.Category) || undefined,
    },
  }
}

async function listingMeta(slug, site) {
  const item = (await loadDirectory()).find((x) => x.slug === slug)
  if (!item) return null
  const place = item.location || item.district
  return {
    title: full(item.name),
    description: `${item.name}${place ? ` in ${place}` : ""}. ${item.description}`.trim().slice(0, 155),
    url: `${site}/directory/${encodeURIComponent(slug)}`,
    type: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: item.name,
      description: item.description || undefined,
      areaServed: item.district ? `${item.district}, Chhattisgarh, India` : undefined,
      address: place ? { "@type": "PostalAddress", addressLocality: place, addressRegion: "Chhattisgarh", addressCountry: "IN" } : undefined,
    },
  }
}

const fallbackPath = (kind, slug) =>
  kind === "article" ? `/articles/${encodeURIComponent(slug)}` : kind === "listing" ? `/directory/${encodeURIComponent(slug)}` : LISTS[kind]?.path || "/"

export default async function handler(req, res) {
  const kind = String(req.query.kind || "")
  const slug = String(req.query.slug || "")
  try {
    const site = siteUrl(req)
    const base = await fetch(`${originOf(req)}/index.html`)
    if (!base.ok) throw new Error(`index.html ${base.status}`)
    const html = await base.text()

    let meta = null
    if (kind === "article") meta = await articleMeta(slug, site)
    else if (kind === "listing") meta = await listingMeta(slug, site)
    else if (LISTS[kind]) meta = { title: full(LISTS[kind].title), description: LISTS[kind].description, url: site + LISTS[kind].path, type: "website" }
    else throw new Error(`unknown kind ${kind}`)

    const found = Boolean(meta)
    if (!meta) meta = { title: full("Not found"), description: DEFAULT_DESC, url: site + fallbackPath(kind, slug), noindex: true }
    meta.image = `${site}/og.png`

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=60")
    res.status(found ? 200 : 404).send(renderHead(html, meta))
  } catch (e) {
    console.error(e)
    res.redirect(307, `${fallbackPath(kind, slug)}?raw=1`)
  }
}
