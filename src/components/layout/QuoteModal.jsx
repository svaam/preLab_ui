import { useEffect, useRef } from "react";
import { useQuote } from "../../context/QuoteContext";
import { QuoteForm } from "../QuoteForm";

export function QuoteModal() {
  const { isOpen, product, closeQuote } = useQuote();
  const closeRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeQuote();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeQuote]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeQuote();
      }}
    >
      <div className="modal fade-in">
        <button
          type="button"
          className="modal__close"
          ref={closeRef}
          onClick={closeQuote}
          aria-label="Close quote form"
        >
          ×
        </button>
        <h2 className="modal__title" id="quote-modal-title">Request a Quote</h2>
        <p className="modal__sub">
          {product
            ? `Tell us your requirements for ${product.name} and we'll get back to you quickly.`
            : "Tell us what your lab needs and we'll prepare a quotation quickly."}
        </p>
        <QuoteForm productName={product ? product.name : ""} source="Website quote form" />
      </div>
    </div>
  );
}