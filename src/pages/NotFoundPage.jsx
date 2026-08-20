import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta("Page not found — Lab Restock", "The page you are looking for could not be found.");
  return (
    <section className="notfound">
      <p className="notfound__code">404</p>
      <h1>Page not found</h1>
      <p className="section__sub" style={{ marginBottom: 28 }}>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" className="btn btn--primary">
        Back to Home
      </Link>
    </section>
  );
}