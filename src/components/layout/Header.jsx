import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { site } from "../../lib/catalog";
import { useQuote } from "../../context/QuoteContext";
import { Icon } from "../../lib/icons";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/suppliers", label: "Our Suppliers" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { openQuote } = useQuote();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label={`${site.name} home`}>
          <svg
            className="brand__mark"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <rect width="64" height="64" rx="12" fill="#0d3b66" />
            <path
              d="M24 14v18a8 8 0 0 0 16 0V14"
              fill="none"
              stroke="#fff"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path d="M18 46h28" stroke="#38b26d" strokeWidth="5" strokeLinecap="round" />
            <circle cx="32" cy="46" r="3" fill="#fff" />
          </svg>
          <span>{site.name}</span>
        </Link>

        <nav id="site-nav" className={`nav${open ? " nav--open" : ""}`} aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav__link${isActive ? " nav__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="btn btn--primary btn--sm header__cta"
            onClick={() => openQuote(null)}
          >
            Request a Quote
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
            <span className="nav-toggle__bar" />
          </button>
        </div>
      </div>
    </header>
  );
}