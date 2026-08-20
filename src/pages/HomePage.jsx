import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  hero,
  trust,
  categories,
  testimonials,
  featuredProducts,
  suppliers,
} from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { ProductCard } from "../components/ProductCard";
import { Icon } from "../lib/icons";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">{hero.headline}</h1>
          <p className="hero__sub">{hero.subhead}</p>
          <ul className="hero__bullets">
            {hero.bullets.map((b) => (
              <li key={b}>
                <Icon name="check" size={18} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="hero__ctas">
            <Link to={hero.ctaPrimary.to} className="btn btn--primary">
              {hero.ctaPrimary.label}
              <Icon name="arrowRight" size={18} />
            </Link>
            <Link to={hero.ctaSecondary.to} className="btn btn--ghost-light">
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__stat">
            <Icon name="delivery" size={26} />
            <span className="hero__stat-label">Direct-to-lab delivery</span>
          </div>
          <div className="hero__stat">
            <Icon name="network" size={26} />
            <span className="hero__stat-label">Multi-supplier sourcing</span>
          </div>
          <div className="hero__stat">
            <Icon name="contract" size={26} />
            <span className="hero__stat-label">Contract-backed supply</span>
          </div>
          <div className="hero__stat">
            <Icon name="bolt" size={26} />
            <span className="hero__stat-label">Fast quote turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryGrid() {
  return (
    <section className="section" aria-labelledby="categories-heading">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">Our Catalog</span>
          <h2 className="section__title" id="categories-heading">
            Everything your lab needs, in four categories
          </h2>
          <p className="section__sub">
            Consumables and equipment sourced from a contracted supplier
            network — one point of contact for all of it.
          </p>
        </div>
        <div className="cat-grid">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/products/${cat.slug}`} className="cat-card">
              <span className="cat-card__icon">
                <Icon name={cat.icon} size={26} />
              </span>
              <h3 className="cat-card__name">{cat.name}</h3>
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
  );
}

function WhyChooseUs() {
  return (
    <section className="section section--alt" aria-labelledby="trust-heading">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="section__eyebrow">Why Lab Restock</span>
          <h2 className="section__title" id="trust-heading">
            Built for labs that can&apos;t afford delays
          </h2>
          <p className="section__sub">
            We handle the sourcing so your procurement team doesn&apos;t have to.
          </p>
        </div>
        <div className="trust-grid">
          {trust.map((t) => (
            <div className="trust-item" key={t.title}>
              <span className="trust-item__icon">
                <Icon name={t.icon} size={22} />
              </span>
              <h3 className="trust-item__title">{t.title}</h3>
              <p className="trust-item__text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCarousel() {
  const viewportRef = useRef(null);
  const featured = featuredProducts();

  const scrollBy = (dir) => {
    viewportRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="section__eyebrow">Featured Products</span>
          <h2 className="section__title" id="featured-heading">
            Frequently requested items
          </h2>
          <p className="section__sub">
            A few of the consumables labs order most. Request a quote for any
            of them in bulk or single pack.
          </p>
        </div>
        <div className="carousel">
          <div className="carousel__viewport" ref={viewportRef}>
            {featured.map((p) => (
              <div className="carousel__item" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="carousel__controls">
            <button
              type="button"
              className="carousel__btn"
              aria-label="Scroll featured products left"
              onClick={() => scrollBy(-1)}
            >
              <Icon name="chevronLeft" size={18} />
            </button>
            <button
              type="button"
              className="carousel__btn"
              aria-label="Scroll featured products right"
              onClick={() => scrollBy(1)}
            >
              <Icon name="chevronRight" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupplierStrip() {
  return (
    <section className="section section--tint" aria-labelledby="suppliers-heading">
      <div className="container">
        <div className="supplier-strip">
          <p className="supplier-strip__label" id="suppliers-heading">
            Trusted Supplier Network
          </p>
          <div className="supplier-strip__row">
            {suppliers.map((s) => (
              <div className="supplier-logo" key={s.name}>
                <span className="supplier-logo__mark">
                  {s.name
                    .split(/\s+/)
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <span className="supplier-logo__name">{s.name}</span>
              </div>
            ))}
          </div>
          <p className="section__sub" style={{ textAlign: "center", margin: "20px 0 0" }}>
            Placeholder supplier logos — we are under contract with multiple
            trusted manufacturers and distributors.{" "}
            <Link to="/suppliers">See our suppliers →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

function AboutSnippet() {
  return (
    <section className="section" aria-labelledby="about-snippet-heading">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">About Us</span>
          <h2 className="section__title" id="about-snippet-heading">
            Procurement, finally in one place
          </h2>
          <p className="section__sub">
            Lab Restock was founded by four colleagues to fix fragmented lab
            procurement: the delays, the vendor chasing, the unreliable
            deliveries. We built a single, contract-backed point of contact
            for laboratory supplies.
          </p>
          <div style={{ marginTop: 24 }}>
            <Link to="/about" className="btn btn--outline">
              Read Our Story
              <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section section--alt" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="section__eyebrow">What Clients Say</span>
          <h2 className="section__title" id="testimonials-heading">
            Trusted by labs and institutes
          </h2>
          <p className="section__sub">
            Placeholder testimonials — replace with real client feedback.
          </p>
        </div>
        <div className="testi-grid">
          {testimonials.map((t) => (
            <blockquote className="testi-card" key={t.source}>
              <Icon name="quote" size={30} />
              <p className="testi-card__text">{t.text}</p>
              <footer className="testi-card__source">— {t.source}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="section" aria-label="Request a quote">
      <div className="container">
        <div className="cta-banner">
          <div>
            <h2 className="cta-banner__title">Need bulk supply for your lab?</h2>
            <p className="cta-banner__text">
              Get an itemised quotation for institutional and bulk orders —
              usually within one business day.
            </p>
          </div>
          <Link to="/quote" className="btn btn--block" style={{ background: "#fff", color: "#2c9158" }}>
            Get a Quote Today
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  usePageMeta(
    "Lab Restock — Laboratory Equipment & Consumables Supplier",
    "Direct-to-lab supplier of plasticware, glassware, reagents, filtration products and safety PPE for labs, research institutes, hospitals and colleges."
  );
  return (
    <>
      <Hero />
      <CategoryGrid />
      <WhyChooseUs />
      <FeaturedCarousel />
      <SupplierStrip />
      <AboutSnippet />
      <TestimonialsSection />
      <CtaBanner />
    </>
  );
}