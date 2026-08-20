import { Link } from "react-router-dom";
import { site } from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { QuoteForm } from "../components/QuoteForm";
import { Icon } from "../lib/icons";

export function ContactPage() {
  usePageMeta(
    "Contact Us — Lab Restock",
    "Contact Lab Restock for laboratory equipment and consumables quotes. Address, phone, email and working hours."
  );
  return (
    <>
      <section className="page-header">
        <div className="container">
          <p className="page-header__crumbs">
            <Link to="/">Home</Link> / Contact
          </p>
          <h1 className="page-header__title">Contact Us</h1>
          <p className="page-header__sub">
            Tell us what your lab needs — we&apos;ll come back with a quotation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section__head">
                <span className="section__eyebrow">Send a Message</span>
                <h2 className="section__title">Get in touch</h2>
              </div>
              <QuoteForm source="Contact page" />
            </div>

            <div>
              <div className="section__head">
                <span className="section__eyebrow">Reach Us Directly</span>
                <h2 className="section__title">Contact details</h2>
              </div>
              <div className="info-card">
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <Icon name="pin" size={18} />
                  </span>
                  <div>
                    <div className="info-card__label">Address</div>
                    <div className="info-card__value">{site.address}</div>
                  </div>
                </div>
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <Icon name="phone" size={18} />
                  </span>
                  <div>
                    <div className="info-card__label">Phone</div>
                    <div className="info-card__value">
                      <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <Icon name="mail" size={18} />
                  </span>
                  <div>
                    <div className="info-card__label">Email</div>
                    <div className="info-card__value">
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </div>
                  </div>
                </div>
                <div className="info-card__item">
                  <span className="info-card__icon">
                    <Icon name="clock" size={18} />
                  </span>
                  <div>
                    <div className="info-card__label">Working Hours</div>
                    <div className="info-card__value">{site.hours}</div>
                  </div>
                </div>
              </div>

              <div className="map-placeholder" style={{ marginTop: 24 }}>
                <Icon name="pin" size={28} />
                <p>
                  Map embed placeholder — replace with a Google Maps iframe of
                  your actual location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}