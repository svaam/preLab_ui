# Lab Restock — Lab Supplies Website

A static, B2B lead-generation and catalog website for a laboratory equipment
and consumables vendor/distributor. Built with **React + Vite** and deployed
as a fully static site (no backend, no database).

> **Placeholder site.** The brand name "Lab Restock", contacts, products,
> supplier names and founder bios are placeholders. Edit `src/data/data.json`
> to replace them.

## Tech stack

- React 18 + Vite (fast build, static output in `dist/`)
- React Router with **hash-based routing** (works on GitHub Pages with zero config)
- All content lives in a single JSON file: `src/data/data.json`
- Forms use a **mailto: fallback** (open the visitor's email app pre-filled)

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Pages

| Route | Page |
|---|---|
| `#/` | Home (hero, categories, trust, featured carousel, suppliers, testimonials, CTA) |
| `#/about` | Company story, founders, mission/vision |
| `#/products` | Category index |
| `#/products/:category` | Category landing + filterable products |
| `#/products/:category/:subcategory` | Pre-filtered sub-category view |
| `#/product/:id` | Product detail with spec table + related products |
| `#/suppliers` | Supplier/partner grid |
| `#/contact` | Contact form + details |
| `#/quote` | Dedicated quote page (accepts `?product=<id>`) |

## Editing content

Everything visible is driven by `src/data/data.json`:

- **Brand & contacts** — `site` object
- **Hero text** — `hero`
- **Categories / sub-categories** — `categories`
- **Products** — `products` (name, category, subcategory, description,
  packSize, specs table, `featured` flag)
- **Suppliers, founders, testimonials, about copy** — their own sections

To change the quote email used by the mailto forms, update
`site.quoteEmail`.

## Styling

All styles are in `src/styles/index.css` using CSS custom properties at the
top (colors, fonts, radii). Change the palette there.

Icons are inline SVGs in `src/lib/icons.jsx`. Product images are placeholder
SVG glyphs per category from `src/components/ProductImage.jsx`.

## Deployment

GitHub Pages is set up via `.github/workflows/deploy.yml` — pushes to `main`
build and deploy automatically to GitHub Pages. Because the site uses hash
routing, no `404.html` fallback is required.

## License

See [LICENSE](LICENSE).