import data from "../data/data.json";

export const site = data.site;
export const hero = data.hero;
export const trust = data.trust;
export const categories = data.categories;
export const products = data.products;
export const suppliers = data.suppliers;
export const founders = data.founders;
export const testimonials = data.testimonials;
export const about = data.about;

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategory(categorySlug, subSlug) {
  const cat = getCategory(categorySlug);
  return cat ? cat.subcategories.find((s) => s.slug === subSlug) : undefined;
}

export function productsForCategory(categorySlug) {
  return products.filter((p) => p.category === categorySlug);
}

export function productsForSubcategory(categorySlug, subSlug) {
  return products.filter(
    (p) => p.category === categorySlug && p.subcategory === subSlug
  );
}

export function getProduct(id) {
  return products.find((p) => p.id === id);
}

export function relatedProducts(product, count = 3) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count);
}

export function featuredProducts() {
  return products.filter((p) => p.featured);
}

export function categoryName(slug) {
  const c = getCategory(slug);
  return c ? c.name : slug;
}

export function subcategoryName(categorySlug, subSlug) {
  const s = getSubcategory(categorySlug, subSlug);
  return s ? s.name : subSlug;
}