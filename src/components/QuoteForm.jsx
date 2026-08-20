import { useState } from "react";
import { site } from "../lib/catalog";

const initialForm = {
  name: "",
  institution: "",
  email: "",
  phone: "",
  products: "",
  message: "",
};

export function QuoteForm({ productName, source }) {
  const [form, setForm] = useState(() => ({
    ...initialForm,
    products: productName || "",
  }));
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = productName
      ? `Quote request: ${productName}`
      : "Quote request — Lab Restock";
    const body = [
      "New quote request from the Lab Restock website.",
      "",
      `Name: ${form.name}`,
      `Institution / Lab: ${form.institution}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      source ? `Enquiry source: ${source}` : "",
      form.products ? `Product(s) needed: ${form.products}` : "",
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.quoteEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <p className="form__note">
        This form opens your email app with everything pre-filled for
        {productName ? ` ${productName}` : " your enquiry"} — just press send.
        Or email us directly at{" "}
        <a href={`mailto:${site.quoteEmail}`}>{site.quoteEmail}</a>.
      </p>

      {sent && (
        <p className="form__success">
          Your email draft has been prepared. If your email app did not open,
          please contact us directly at{" "}
          <a href={`mailto:${site.quoteEmail}`}>{site.quoteEmail}</a>.
        </p>
      )}

      <div className="form__row">
        <div className="field">
          <label htmlFor="q-name">Name</label>
          <input
            id="q-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="q-institution">Institution / Lab</label>
          <input
            id="q-institution"
            name="institution"
            type="text"
            required
            placeholder="University, institute, hospital or company"
            value={form.institution}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="q-email">Email</label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            placeholder="you@institution.edu"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="q-phone">Phone</label>
          <input
            id="q-phone"
            name="phone"
            type="tel"
            placeholder="Optional contact number"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="q-products">Product(s) needed</label>
        <input
          id="q-products"
          name="products"
          type="text"
          value={form.products}
          onChange={handleChange}
          placeholder="e.g. 0.22 µm PVDF syringe filters, 100 packs"
        />
      </div>

      <div className="field">
        <label htmlFor="q-message">Message</label>
        <textarea
          id="q-message"
          name="message"
          placeholder="Quantities, delivery location, target timeline, or any specific requirements…"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn--primary">
        Prepare Quote Request
      </button>
    </form>
  );
}