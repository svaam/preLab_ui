import { useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import {
  getCategory,
  getSubcategory,
  productsForCategory,
  productsForSubcategory,
} from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { ProductCard } from "../components/ProductCard";
import { Icon } from "../lib/icons";

export function CategoryPage() {
  const { categorySlug, subSlug } = useParams();
  const category = getCategory(categorySlug);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  const activeSub = subSlug ? getSubcategory(categorySlug, subSlug) : null;

  const filtered = useMemo(() => {
    if (!category) return [];
    let list = subSlug
      ? productsForSubcategory(categorySlug, subSlug)
      : productsForCategory(categorySlug);

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.packSize.toLowerCase().includes(q)
      );
    }

    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === "featured") {
      list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [category, categorySlug, subSlug, search, sort]);

  usePageMeta(
    `${category ? category.name : "Products"} — Lab Restock`,
    category ? category.description : "Lab Restock product catalog."
  );

  if (!category) {
    return <Navigate to="/products" replace />;
  }

  const title = activeSub ? activeSub.name : category.name;
  const sub = activeSub ? activeSub.description : category.description;

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="page-header__crumbs">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
            {activeSub ? (
              <>
                <Link to={`/products/${category.slug}`}>{category.name}</Link> /{" "}
                {activeSub.name}
              </>
            ) : (
              category.name
            )}
          </p>
          <h1 className="page-header__title">{title}</h1>
          <p className="page-header__sub">{sub}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {!activeSub && (
            <div className="filters" style={{ marginBottom: 32 }}>
              {category.subcategories.map((s) => (
                <Link key={s.slug} to={`/products/${category.slug}/${s.slug}`} className="chip">
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          <div className="filters">
            <div className="search-box">
              <Icon name="search" size={16} />
              <input
                type="search"
                placeholder="Search within this category…"
                aria-label="Search products in this category"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <label className="sr-only" htmlFor="sort-products">
              Sort products
            </label>
            <select
              id="sort-products"
              className="chip"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{ borderRadius: 999, padding: "8px 16px" }}
            >
              <option value="featured">Featured first</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>

          <p className="results-count">
            {filtered.length} product{filtered.length === 1 ? "" : "s"}
          </p>

          {filtered.length === 0 ? (
            <div className="empty-state">
              <p>No products match your search.</p>
            </div>
          ) : (
            <div className="prod-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}