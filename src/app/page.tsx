"use client";

import Link from 'next/link';
import './globals.css';

export default function Home() {
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
          <h1 className="hero-title">Ignite the Future</h1>
          <p className="hero-sub">Discover futuristic luxury with our high-tech scented candles that illuminate more than just your room.</p>

          <div className="cta-buttons">
            <Link href="/signup" className="btn-primary">Sign Up</Link>
            <Link href="/signin" className="btn-secondary">Sign In</Link>
          </div>

          <div className="explore-link">
            <Link href="/candlecol" className="explore-text">
              Explore the Collection &rarr;
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-box">
            <span className="image-text">[ 3D Candle Preview ]</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} LuxNova. All rights reserved.
      </footer>
    </main>
  );
}
