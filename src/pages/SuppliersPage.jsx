import { Link } from "react-router-dom";
import { suppliers } from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";

export function SuppliersPage() {
  usePageMeta(
    "Our Suppliers — Lab Restock",
    "Lab Restock is under contract with a network of trusted laboratory equipment and consumables manufacturers and distributors."
  );
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="page-header__crumbs">
            <Link to="/">Home</Link> / Our Suppliers
          </p>
          <h1 className="page-header__title">Our Suppliers</h1>
          <p className="page-header__sub">
            We are a distributor, not a manufacturer. Every product we deliver
            comes from a supplier we&apos;re under contract with — so quality,
            pricing and availability are documented and dependable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">Trusted Supplier Network</span>
            <h2 className="section__title">Partner manufacturers &amp; distributors</h2>
            <p className="section__sub">
              Placeholder names and logos — replace with your actual supplier
              partners.
            </p>
          </div>
          <div className="supplier-grid">
            {suppliers.map((s) => (
              <article className="testi-card" key={s.name}>
                <div className="supplier-logo" style={{ border: "none", background: "var(--color-primary-tint)" }}>
                  <span className="supplier-logo__mark">
                    {s.name
                      .split(/\s+/)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span className="supplier-logo__name">{s.name}</span>
                </div>
                <p className="trust-item__text">
                  <strong style={{ color: "var(--color-ink)" }}>{s.area}</strong>
                  <br />
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}