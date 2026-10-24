// Puts a page's own title, description and preview tags into the site's index.html, so Google and WhatsApp see them
// without running JavaScript. Pure string work, no network.
export const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

function setMeta(html, attr, key, content) {
  const tag = `<meta ${attr}="${key}" content="${esc(content)}" />`
  const re = new RegExp(`<meta\\s+${attr}="${key}"[^>]*>`, "i")
  return re.test(html) ? html.replace(re, () => tag) : html.replace("</head>", () => `${tag}\n</head>`)
}

// meta: { title, description, url, image, type, locale, noindex, jsonLd }
export function renderHead(html, m) {
  let out = html.replace(/<title>[\s\S]*?<\/title>/i, () => `<title>${esc(m.title)}</title>`)
  out = setMeta(out, "name", "description", m.description)
  out = setMeta(out, "name", "robots", m.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large")
  out = setMeta(out, "property", "og:title", m.title)
  out = setMeta(out, "property", "og:description", m.description)
  out = setMeta(out, "property", "og:url", m.url)
  out = setMeta(out, "property", "og:type", m.type || "website")
  if (m.locale) out = setMeta(out, "property", "og:locale", m.locale)
  if (m.image) {
    out = setMeta(out, "property", "og:image", m.image)
    out = setMeta(out, "name", "twitter:image", m.image)
  }
  out = setMeta(out, "name", "twitter:title", m.title)
  out = setMeta(out, "name", "twitter:description", m.description)
  const canonical = `<link rel="canonical" href="${esc(m.url)}" />`
  out = /<link\s+rel="canonical"[^>]*>/i.test(out) ? out.replace(/<link\s+rel="canonical"[^>]*>/i, () => canonical) : out.replace("</head>", () => `${canonical}\n</head>`)
  if (m.jsonLd) {
    const ld = `<script type="application/ld+json" id="page-jsonld">${JSON.stringify(m.jsonLd).replace(/</g, "\\u003c")}</script>`
    out = out.replace("</head>", () => `${ld}\n</head>`)
  }
  return out
}

const xml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

// urls: [{ path, lastmod? }]
export function buildSitemap(site, urls) {
  const rows = urls.map((u) => `  <url><loc>${xml(site + u.path)}</loc>${u.lastmod ? `<lastmod>${xml(u.lastmod.slice(0, 10))}</lastmod>` : ""}</url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join("\n")}\n</urlset>\n`
}
