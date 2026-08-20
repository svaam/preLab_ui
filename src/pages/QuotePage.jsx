import { useSearchParams, Link } from "react-router-dom";
import { getProduct, categoryName } from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { QuoteForm } from "../components/QuoteForm";

export function QuotePage() {
  const [params] = useSearchParams();
  const productId = params.get("product");
  const product = productId ? getProduct(productId) : undefined;
  const prefilled = product ? product.name : params.get("name") || "";

  usePageMeta(
    "Request a Quote — Lab Restock",
    "Request a quotation for laboratory equipment and consumables from Lab Restock."
  );

  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="page-header__crumbs">
            <Link to="/">Home</Link> / Request a Quote
          </p>
          <h1 className="page-header__title">Request a Quote</h1>
          <p className="page-header__sub">
            {product
              ? `Ready to quote: ${product.name}`
              : "Tell us what your lab needs and we'll prepare an itemised quotation quickly."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              {product && (
                <p className="placeholder-note" style={{ marginBottom: 20 }}>
                  Pre-filled product:{" "}
                  <Link to={`/product/${product.id}`}>{product.name}</Link> (
                  {categoryName(product.category)})
                </p>
              )}
              <QuoteForm productName={prefilled} source="Quote page" />
            </div>
            <div>
              <div className="info-card">
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <span>1</span>
                  </span>
                  <div>
                    <div className="info-card__label">Tell us what you need</div>
                    <div className="info-card__value">Products, quantities and delivery location.</div>
                  </div>
                </div>
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <span>2</span>
                  </span>
                  <div>
                    <div className="info-card__label">We prepare the quote</div>
                    <div className="info-card__value">Itemised quotation, usually within one business day.</div>
                  </div>
                </div>
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <span>3</span>
                  </span>
                  <div>
                    <div className="info-card__label">We deliver direct</div>
                    <div className="info-card__value">Contract-backed supply straight to your lab.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}