"use client";

import Image from 'next/image';
import Link from 'next/link';
import './home.css';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Ignite Your Senses</h1>
          <p>Discover our luxury candles made from all-natural coconut and soy wax blends, infused with unique fragrances and a story in every scent.</p>
          <Link href="/candlecol" className="hero-btn">Explore Candles</Link>
        </div>
        <div className="hero-img">
          <Image
            src="/candle-glow.gif"
            alt="Candle flickering"
            width={400}
            height={400}
          />
        </div>
      </section>

      <section className="about-section">
        <h2>Our Craft</h2>
        <p>
          At LuxNova, we craft candles using a clean-burning formula made of premium soy wax and coconut wax. We include two skin-safe preservatives — Voybar and Stearic acid for optimal shelf-life and most importantly scent.
        </p>
        <p>
          Our fragrance oils include notes of pomegranate, vanilla, tonka bean, musk, pipe tobacco, sandalwood, and more. Every candle is hand-poured in small batches for quality and consistency.
        </p>
      </section>

      <section className="gallery-section">
        <h2>Signature Scents</h2>
        <div className="gallery">
          <div className="gallery-card">
            <Image src="/candle1.jpg" alt="Vanilla Musk" width={300} height={300} />
            <h3>Vanilla Musk</h3>
          </div>
          <div className="gallery-card">
            <Image src="/candle2.jpg" alt="Tonka Tobacco" width={300} height={300} />
            <h3>Tonka Tobacco</h3>
          </div>
          <div className="gallery-card">
            <Image src="/candle3.jpg" alt="Pomegranate Bloom" width={300} height={300} />
            <h3>Pomegranate Bloom</h3>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} LuxNova Candles. Hand-poured with love.</p>
      </footer>
    </main>
  );
};

export default Home;
