import { Link } from "react-router-dom";
import { categoryName } from "../lib/catalog";
import { useQuote } from "../context/QuoteContext";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }) {
  const { openQuote } = useQuote();
  return (
    <article className="prod-card">
      <Link
        to={`/product/${product.id}`}
        className="prod-card__media"
        aria-hidden="true"
        tabIndex={-1}
      >
        <ProductImage category={product.category} />
      </Link>
      <div className="prod-card__body">
        <span className="prod-card__cat">{categoryName(product.category)}</span>
        <h3 className="prod-card__name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="prod-card__desc">{product.description}</p>
        <p className="prod-card__pack">{product.packSize}</p>
        <div className="prod-card__actions">
          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={() => openQuote(product)}
          >
            Request Quote
          </button>
        </div>
      </div>
    </article>
  );
}