import { Icon } from "../lib/icons";

const categoryIcon = {
  "plasticware-glassware": "flask",
  "reagents-chemicals": "dna",
  "filtration-products": "filter",
  "safety-ppe": "shield",
};

export function categoryIconName(slug) {
  return categoryIcon[slug] || "flask";
}

export function ProductImage({ category, size = 72 }) {
  return (
    <Icon
      name={categoryIconName(category)}
      size={size}
      label={`Placeholder illustration for ${category} products`}
    />
  );
}