"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './product.css';

const scentMaps = [
  { x: 80, y: 30, label: 'Sweet + Oud' },
  { x: 50, y: 70, label: 'Warm + Spicy' },
  { x: 40, y: 80, label: 'Woody + Earthy' },
  { x: 60, y: 40, label: 'Fresh + Floral' },
  { x: 55, y: 35, label: 'Romantic + Rose' }
];

export default function ProductsPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  useEffect(() => {
    if (openIndex !== null && refs.current[openIndex]) {
      refs.current[openIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [openIndex]);

  return (
    <main className="main-bg">
      <nav className="nav-bar">
        <div className="brand">LuxNova</div>
        <div className="nav-links">
          <Link href="/home" className="nav-link">Home</Link>
          <Link href="/products" className="nav-link">Products</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">Our Signature Candle Collection</h1>
          <p className="hero-sub">Hand-poured luxury candles crafted for ambiance, mood, and elegance.</p>
        </div>
      </section>

      <section className="products-gallery">
        {[{
          name: 'Pom-Sugar Candle',
          price: '$28.00',
          stock: 12,
          img: '/images/pom-sugar.jpg',
          details: [
            'Size: 8 oz',
            'Burn time: ~45 hours',
            'Fragrance: Pomegranate, Vanilla Sugar, Oud',
            'Scent profile: Sweet and rich – perfect for date nights'
          ]
        }, {
          name: 'Golden Ember',
          price: '$26.00',
          stock: 8,
          img: '/images/golden-amber.jpg',
          details: [
            'Size: 9 oz',
            'Burn time: ~50 hours',
            'Fragrance: Amber, Crushed Clove, Smoked Vanilla',
            'Scent profile: Cozy, warm, and subtly spicy'
          ]
        }, {
          name: 'Cedar Nightfall',
          price: '$30.00',
          stock: 5,
          img: '/images/cedar-night.jpg',
          details: [
            'Size: 10 oz',
            'Burn time: ~60 hours',
            'Fragrance: Cedarwood, Black Currant, Leather Accord',
            'Scent profile: Earthy and bold – ideal for cool evenings'
          ]
        }, {
          name: 'Moon Glow',
          price: '$27.00',
          stock: 10,
          img: '/images/moon-glow.jpg',
          details: [
            'Size: 9 oz',
            'Burn time: ~55 hours',
            'Fragrance: Jasmine, Bergamot, White Tea',
            'Scent profile: Fresh and floral – peaceful ambiance'
          ]
        }, {
          name: 'Rose Velvet',
          price: '$29.00',
          stock: 6,
          img: '/images/rose-velvet.jpg',
          details: [
            'Size: 8 oz',
            'Burn time: ~48 hours',
            'Fragrance: Turkish Rose, Tonka, Amber Vanilla',
            'Scent profile: Luxurious and romantic – perfect for special evenings'
          ]
        }].map((candle, index) => {
          const isOpen = openIndex === index;
          const scentPos = scentMaps[index];

          return (
            <div
              key={index}
              className={`product-card-wrapper ${isOpen ? 'expanded' : ''}`}
            >
              <div
                className={`product-card ${index % 3 === 0 ? 'tilt-left' : index % 3 === 1 ? 'tilt-right' : 'tilt-center'}`}
                ref={(el) => (refs.current[index] = el)}
              >
                <img src={candle.img} alt={candle.name} className="product-image" />
                <h2>{candle.name}</h2>
                <p className="price">{candle.price}</p>
                <p className="stock">{candle.stock} in stock</p>
                <div className="product-details-toggle">
                  <span
                    className="details-button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {isOpen ? 'Hide Details' : 'Show Details'}
                  </span>
                  <div className={`product-details-list-container ${isOpen ? 'open' : ''}`}>
                    <ul className="product-details-list">
                      {candle.details.map((detail, i) => (
                        <li key={i}><span className="detail-label">➤</span><span>{detail}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className={`scent-map ${isOpen ? 'visible' : ''}`} onClick={() => setOpenIndex(null)}>
                    <div className="scent-map-circle">
                      <div
                        className="scent-dot"
                        style={{ left: `${scentPos.x}%`, top: `${scentPos.y}%` }}
                      ></div>
                    </div>
                    <p className="scent-label">{scentPos.label}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} LuxNova. All rights reserved.
      </footer>
    </main>
  );
}
