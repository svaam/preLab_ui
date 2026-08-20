import { Link } from "react-router-dom";
import { site, categories } from "../../lib/catalog";
import { Icon } from "../../lib/icons";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/suppliers", label: "Our Suppliers" },
  { to: "/contact", label: "Contact" },
  { to: "/quote", label: "Request a Quote" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="footer__brand">
              <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
                <rect width="64" height="64" rx="12" fill="#38b26d" />
                <path
                  d="M24 14v18a8 8 0 0 0 16 0V14"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
                <path d="M18 46h28" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
              </svg>
              {site.name}
            </Link>
            <p className="footer__text">
              {site.tagline}. A vendor/distributor delivering directly to
              laboratories, research institutes, hospitals and colleges.
            </p>
            <p className="placeholder-note">
              Placeholder site — brand name, contacts and products to be replaced.
            </p>
          </div>

          <div>
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Categories</h3>
            <ul className="footer__links">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/products/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__contact">
              <li>
                <Icon name="pin" size={16} />
                <span>{site.address}</span>
              </li>
              <li>
                <Icon name="phone" size={16} />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="clock" size={16} />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="footer__social">
            <a href={site.socials.linkedin} aria-label="LinkedIn">
              <Icon name="linkedin" size={16} />
            </a>
            <a href={site.socials.twitter} aria-label="Twitter / X">
              <Icon name="twitter" size={16} />
            </a>
            <a href={site.socials.facebook} aria-label="Facebook">
              <Icon name="facebook" size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}