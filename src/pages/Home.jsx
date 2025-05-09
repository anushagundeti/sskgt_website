import React from 'react';
import Hero from '../components/Hero';
import OwnerCard from '../components/OwnerCard';
import ServiceHighlights from '../components/ServiceHighlights';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <OwnerCard />
      <ServiceHighlights />
      <Footer />
    </div>
  );
}
