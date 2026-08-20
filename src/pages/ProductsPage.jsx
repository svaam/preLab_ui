import { Link } from "react-router-dom";
import { categories } from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../lib/icons";

export function ProductsPage() {
  usePageMeta(
    "Products — Lab Restock",
    "Browse Lab Restock's product catalog: plasticware & glassware, reagents & chemicals, filtration products, and safety & PPE."
  );
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="page-header__crumbs">
            <Link to="/">Home</Link> / Products
          </p>
          <h1 className="page-header__title">Products</h1>
          <p className="page-header__sub">
            Four categories, one supplier. Browse by category, then filter
            down to the exact product your lab needs.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cat-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/products/${cat.slug}`} className="cat-card">
                <span className="cat-card__icon">
                  <Icon name={cat.icon} size={26} />
                </span>
                <h2 className="cat-card__name">{cat.name}</h2>
                <p className="cat-card__tagline">{cat.tagline}</p>
                <span className="cat-card__link">
                  View Products
                  <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}