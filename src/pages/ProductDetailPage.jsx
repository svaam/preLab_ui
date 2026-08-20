import { Link, useParams, Navigate } from "react-router-dom";
import {
  getProduct,
  getCategory,
  relatedProducts,
  categoryName,
} from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { useQuote } from "../context/QuoteContext";
import { ProductCard } from "../components/ProductCard";
import { ProductImage } from "../components/ProductImage";

export function ProductDetailPage() {
  const { productId } = useParams();
  const product = getProduct(productId);
  const { openQuote } = useQuote();

  usePageMeta(
    product ? `${product.name} — Lab Restock` : "Product — Lab Restock",
    product ? product.description : "Lab Restock product."
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const category = getCategory(product.category);
  const related = relatedProducts(product);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="page-header__crumbs">
            <Link to="/">Home</Link> / <Link to="/products">Products</Link> /{" "}
            <Link to={`/products/${product.category}`}>
              {categoryName(product.category)}
            </Link>{" "}
            / {product.name}
          </p>
          <h1 className="page-header__title">{product.name}</h1>
          <p className="page-header__sub">{product.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-media">
              <ProductImage category={product.category} size={140} />
            </div>

            <div>
              <p className="prod-card__cat">{categoryName(product.category)}</p>
              <h2 className="detail__title">{product.name}</h2>
              <p className="detail__desc">{product.description}</p>
              <p className="detail__pack">Pack size: {product.packSize}</p>

              {product.specs.length > 0 && (
                <>
                  <h3 style={{ fontSize: "1.1rem" }}>Specifications</h3>
                  <table className="spec-table">
                    <tbody>
                      {product.specs.map(([label, value]) => (
                        <tr key={label}>
                          <th scope="row">{label}</th>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              <div className="quote-box">
                <h3 className="quote-box__title">Need this product?</h3>
                <p className="quote-box__text">
                  No online checkout — we prepare a quotation based on your
                  pack sizes, quantities and delivery location.
                </p>
                <button
                  type="button"
                  className="btn btn--primary btn--block"
                  onClick={() => openQuote(product)}
                >
                  Request Quote for {product.name}
                </button>
                <p style={{ margin: "12px 0 0", fontSize: "0.85rem", color: "var(--color-muted)" }}>
                  Also available through the{" "}
                  <Link to={`/products/${product.category}`}>{category ? category.name : "category"}</Link>{" "}
                  catalog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section__head">
              <span className="section__eyebrow">You may also need</span>
              <h2 className="section__title">Related products</h2>
            </div>
            <div className="prod-grid">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}