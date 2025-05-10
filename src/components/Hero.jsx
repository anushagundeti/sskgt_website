import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="mt-6 w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white relative"
      style={{ backgroundImage: "url('/images/hero.jpg.jpeg')" }}
    >
      <div className="bg-black/50 px-4 sm:px-6 py-8 sm:py-10 rounded-xl max-w-4xl w-full mx-2 sm:mx-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4">
          Welcome to <span className="text-blue-400">SSKGT</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 sm:mb-8 leading-relaxed">
          Streamlining Your Business Operations with Efficient Fleet Management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition text-sm sm:text-base"
          >
            Our Services →
          </Link>
          <Link
            to="/contact"
            className="border border-white hover:border-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
