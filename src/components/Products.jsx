import { useState } from "react";
import { FadeIn } from "./shared";
import pureCamelMilk from "../assets/products/pure-camel-milk.jpeg";
import camelMilkPowder from "../assets/products/Camel-Milk-powder.jpeg";
import iceCream from "../assets/products/ice-creams.jpeg";
import yogurt from "../assets/products/Flayvoured-yougurt.jpeg";
import wheyProtein from "../assets/products/Camel-whey-protein.jpeg";
import milkshakes from "../assets/products/milkshakes.jpeg";
import soap from "../assets/products/Camel-Milk-Soap.jpeg";

const products = [
  { image: pureCamelMilk, name: "Pure Camel Milk", tag: "Fresh & Natural" },
  { image: camelMilkPowder, name: "Camel Milk Powder", tag: "Long Shelf Life" },
  { image: iceCream, name: "Seasonal Ice Cream", tag: "Guava & Dates" },
  { image: yogurt, name: "Flavored Yogurt", tag: "Probiotic Rich" },
  { image: wheyProtein, name: "Whey Protein", tag: "Performance" },
  { image: milkshakes, name: "Milk Shakes", tag: "Mango & Strawberry" },
  { image: soap, name: "Soap & Skincare", tag: "Premium Beauty" },
];

export default function Products() {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <section
      id="products"
    >
      <FadeIn>
        <div className="section-label">Our Portfolio</div>
        <h2 className="section-title cinzel">Premium Product Line</h2>
        <div className="gold-line" />
        <p className="section-body">
          Every product crafted from the finest camel milk — 100% natural,
          chemical-free, and designed for the health-conscious modern consumer.
        </p>
      </FadeIn>
      <div
        className="products-grid"
        style={{ maxWidth: 1100, margin: "60px auto 0" }}
      >
        {products.map((p, i) => (
          <FadeIn key={i} delay={i * 70}>
            <div className="product-card">
              <img
                src={p.image}
                alt={p.name}
                className="product-img"
                onClick={() => setLightboxIdx(i)}
                style={{ cursor: "pointer" }}
              />
              <div className="product-name cinzel">{p.name}</div>
              <div className="product-tag">{p.tag}</div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={400}>
        <div className="product-badges" style={{ marginTop: "50px" }}>
          {[
            "100% Chemical-Free",
            "Preservative-Free",
            "Health-Focused",
            "Premium Quality",
          ].map((b) => (
            <span key={b} className="badge">
              {b}
            </span>
          ))}
        </div>
      </FadeIn>

      {lightboxIdx !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx - 1 + products.length) % products.length);
            }}
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setLightboxIdx(null)}
            >
              ✕
            </button>
            <img src={products[lightboxIdx].image} alt={products[lightboxIdx].name} />
            <div className="lightbox-caption cinzel">{products[lightboxIdx].name}</div>
          </div>
          <button
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx + 1) % products.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
