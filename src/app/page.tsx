"use client"; // This is a Client Component

import Link from 'next/link';
import './globals.css'; // Ensure this path is correct

export default function Home() {
  return (
    <div className="container">
      {/* Placeholder for image */}
      <div className="imagePlaceholder">
        {/* You can add an image here later */}
      </div>
      <div className="textContainer">
        <h1 className="quote">Ignite Your Senses</h1>
        <p className="subQuote">Explore Our Luxurious Candle Collection!</p>
      </div>
      <div className="buttContainer">
        <div className="buttonContainer">
          <Link href="/signup" className="button">
            Sign Up
          </Link>
          <Link href="/signin" className="button"> {/* Removed .tsx */}
            Sign In
          </Link>
        </div>
        <div className="viewCandleCollection">
          <Link href="/candlecol" className="luxLink">
            View Our Candle Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
