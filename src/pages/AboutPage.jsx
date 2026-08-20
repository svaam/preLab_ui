import { Link } from "react-router-dom";
import { founders, about } from "../lib/catalog";
import { usePageMeta } from "../hooks/usePageMeta";
import { Icon } from "../lib/icons";

function PageHeader() {
  return (
    <section className="page-header">
      <div className="container">
        <p className="page-header__crumbs">
          <Link to="/">Home</Link> / About Us
        </p>
        <h1 className="page-header__title">About Lab Restock</h1>
        <p className="page-header__sub">
          We make laboratory procurement simple, reliable and direct — built by
          four colleagues who were tired of watching labs lose time to supply
          chain friction.
        </p>
      </div>
    </section>
  );
}

export function AboutPage() {
  usePageMeta(
    "About Us — Lab Restock",
    "Lab Restock is a direct-to-lab supplier founded by Aditya, Vighnesha, Arth and Shivam to fix fragmented laboratory procurement."
  );
  return (
    <>
      <PageHeader />

      <section className="section">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">Our Story</span>
            <h2 className="section__title">Why Lab Restock exists</h2>
          </div>
          {about.story.map((para) => (
            <p key={para} style={{ maxWidth: "760px", fontSize: "1.05rem" }}>
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section__head section__head--center">
            <span className="section__eyebrow">Founders</span>
            <h2 className="section__title">The team behind Lab Restock</h2>
            <p className="section__sub">
              Placeholder photos and bios — replace with real details.
            </p>
          </div>
          <div className="team-grid">
            {founders.map((f) => (
              <div className="team-card" key={f.name}>
                <span className="team-card__avatar" aria-hidden="true">
                  {f.name[0]}
                </span>
                <h3 className="team-card__name">{f.name}</h3>
                <p className="team-card__role">{f.role}</p>
                <p className="team-card__bio">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="testi-card">
              <span className="section__eyebrow">Our Mission</span>
              <h3 className="section__title" style={{ fontSize: "1.4rem" }}>
                {about.mission}
              </h3>
            </div>
            <div className="testi-card">
              <span className="section__eyebrow">Our Vision</span>
              <h3 className="section__title" style={{ fontSize: "1.4rem" }}>
                {about.vision}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <span className="section__eyebrow">Our Model</span>
            <h2 className="section__title">Why direct-to-lab delivery works</h2>
          </div>
          <ul className="trust-grid">
            {about.whyDirect.map((item) => (
              <li className="trust-item" key={item}>
                <span className="trust-item__icon">
                  <Icon name="check" size={22} />
                </span>
                <p className="trust-item__text">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}