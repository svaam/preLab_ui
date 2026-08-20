import { createContext, useContext, useMemo, useState, useCallback } from "react";

const QuoteContext = createContext(null);

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState(null);

  const openQuote = useCallback((productOrNull) => {
    setProduct(productOrNull || null);
    setIsOpen(true);
  }, []);

  const closeQuote = useCallback(() => {
    setIsOpen(false);
    setProduct(null);
  }, []);

  const value = useMemo(
    () => ({ isOpen, product, openQuote, closeQuote }),
    [isOpen, product, openQuote, closeQuote]
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error("useQuote must be used within a QuoteProvider");
  return ctx;
}